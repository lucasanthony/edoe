package com.edoe.Service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.DescritorItem;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Repository.ItemDAO;

@Service
public class ItemService {

	@Autowired
	private ItemDAO itemDAO;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private DescritorItemService descritorService;

	@Autowired
	private ItemService itemService;

	private List<DescritorItem> descritores;

	public void init() {
		carregaDescritoresItens();
	}

	public Item cadastrarItem(Item item) {
		return itemDAO.insert(item);
	}

	public Item findById(ObjectId id) {
		return itemDAO.findItemById(id);
	}

	public List<Item> retornaItens() {
		return this.itemDAO.findAll();
	}

	public void atualizaQuantidadeItem(ObjectId id, int quantidade) {
		Item item = itemDAO.findItemById(id);
		item.setQuantidade(quantidade);
		itemDAO.save(item);
	}

	public void atualizaTagsItem(ObjectId idItem, String tags) {
		Item item = itemDAO.findItemById(idItem);
		String[] array = tags.split(",");
		for (String tag : array) {
			item.getTags().add(tag);
		}
		itemDAO.save(item);

	}

	public void cadastraItemDoacao(String idDoador, ObjectId idItem, String descricao, int quantidade, String tags) {

		Doador doador = (Doador) usuarioService.pesquisaUsuarioId(idDoador);
		if (!checaItemDoacao(descricao)) {
			cadastraDescritor(descricao);
			Item item = new Item(idItem, findDescritor(descricao), quantidade, tags);
			doador.cadastraItem(item);
		}
		Item item = new Item(idItem, findDescritor(descricao), quantidade, tags);
		doador.cadastraItem(item);
	}

	public void removerItemDoacao(String idDoador, ObjectId idItem) {
		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
		Item item = this.itemService.findById(idItem);
		if (doador.getItensDoacao().contains(item)) {
			doador.getItensDoacao().remove(item);
		}
	}

	public void atualizarQuantidadeItemDoacao(String idDoador, ObjectId idItem, int quantidade) {
		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
		Item item = this.itemService.findById(idItem);
		if (doador.getItensDoacao().contains(item)) {
			this.itemService.atualizaQuantidadeItem(idItem, quantidade);
		}
	}

	public void atualizarTagsItemDoacao(String idDoador, ObjectId idItem, String tags) {
		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
		Item item = this.itemService.findById(idItem);
		if (doador.getItensDoacao().contains(item)) {
			this.itemService.atualizaTagsItem(idItem, tags);
		}
	}

	public DescritorItem findDescritor(String descricao) {
		return descritorService.findById(descricao);
	}

	public boolean existeDescritor(String descricao) {
		return descritorService.existeDescritor(descricao);
	}

	public void cadastraDescritor(String descricao) {
		DescritorItem descritor = new DescritorItem(descricao);
		descritorService.insereDescritor(descritor);
	}

	public String retornaDescritores() {
		String retorno = "";
		for (Item item : this.itemService.retornaItens()) {
			retorno += item.toStringDescQuant();
		}
		return retorno;
	}

	public boolean checaItemDoacao(String descricao) {
		boolean retorno = false;
		for (DescritorItem descritorItem : descritores) {
			if (descritorItem.getDescricao().equals(descricao)) {
				retorno = true;
			}
		}
		return retorno;
	}

	private void carregaDescritoresItens() {
		descritores = descritorService.carregaDescritores();

	}
}
