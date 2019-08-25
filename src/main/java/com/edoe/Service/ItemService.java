package com.edoe.Service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.DescritorItem;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.Receptor;
import com.edoe.Model.Usuario;
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

	public Item cadastrarItem(Item item) {
		return itemDAO.insert(item);
	}

	public Item findById(ObjectId id) {
		return itemDAO.findItemById(id);
	}

	public List<Item> retornaItens() {
		return this.itemDAO.findAll();
	}
	public void cadastraItemDoador(String idUsuario, Item item) throws Exception {
		Doador usuario = (Doador) usuarioService.pesquisaUsuarioId(idUsuario);
		cadastraDescritor(item.getDescricao());
		usuario.getItensDoacao().add(item);
		usuarioService.atualizaUsuario(idUsuario, usuario);
	}
	
	public void atualizaQuantidadeItem(ObjectId id, int quantidade) {
		Item item = itemDAO.findItemById(id);
		item.setQuantidade(quantidade);
		itemDAO.save(item);
	}

/*	public void atualizaTagsItem(ObjectId idItem, String tags) {
		Item item = itemDAO.findItemById(idItem);
		String[] array = tags.split(",");
		for (String tag : array) {
			item.getTags().add(tag);
		}
		itemDAO.save(item);

	}
*/
	public void atualizaItemDoador(String idUsuario, Item item) throws Exception {
		Doador doador = (Doador) usuarioService.pesquisaUsuarioId(idUsuario);
		if(doador.getItensDoacao().contains(item)) {
			int index = doador.getItensDoacao().indexOf(item);
			doador.getItensDoacao().get(index).setQuantidade(item.getQuantidade());
			doador.getItensDoacao().get(index).setTags(item.getTags());
		}
		usuarioService.atualizaUsuario(idUsuario, doador);
	}

	/*
	public void cadastraItemDoacao(String idDoador, ObjectId idItem, String descricao, int quantidade, String tags) {

		Doador doador = (Doador) usuarioService.pesquisaUsuarioId(idDoador);
		if (!checaItemDoacao(descricao)) {
			cadastraDescritor(descricao);
			Item item = new Item(descricao, quantidade, tags);
			doador.cadastraItem(item);
		}
		Item item = new Item(descricao, quantidade, tags);
		doador.cadastraItem(item);
	}
*/
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

	/*public void atualizarTagsItemDoacao(String idDoador, ObjectId idItem, String tags) {
		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
		Item item = this.itemService.findById(idItem);
		if (doador.getItensDoacao().contains(item)) {
			this.itemService.atualizaTagsItem(idItem, tags);
		}
	}*/

	public DescritorItem findDescritor(String descricao) {
		return descritorService.findById(descricao);
	}

	public boolean existeDescritor(String descricao) {
		return descritorService.existeDescritor(descricao);
	}

	public void cadastraDescritor(String descricao) throws Exception {
		if(descritorService.existeDescritor(descricao)) {
			throw new Exception("Descritor já existe");
		}
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

	public void deletarItemDoador(String idUsuario, ObjectId idItem) throws Exception {
		Doador usuario = (Doador) usuarioService.pesquisaUsuarioId(idUsuario);
		Item item = itemService.findById(idItem);
		if(usuario.getItensDoacao().contains(item)) {
			usuario.getItensDoacao().remove(item);	
		}
		usuarioService.atualizaUsuario(idUsuario, usuario);
	}

	public void deletarTodos() {
		itemDAO.deleteAll();
	}

	public void cadastraItemReceptor(String usuarioId, Item item) throws Exception {
		Receptor usuario = (Receptor) usuarioService.pesquisaUsuarioId(usuarioId);
		cadastraDescritor(item.getDescricao());
		usuario.getItensNecessarios().add(item);
		usuarioService.atualizaUsuario(usuarioId, usuario);
		
	}

	public void atualizaItemReceptor(String idUsuario, Item item) throws Exception {
		Receptor receptor = (Receptor) usuarioService.pesquisaUsuarioId(idUsuario);
		if(receptor.getItensNecessarios().contains(item)) {
			int index = receptor.getItensNecessarios().indexOf(item);
			receptor.getItensNecessarios().get(index).setQuantidade(item.getQuantidade());
			receptor.getItensNecessarios().get(index).setTags(item.getTags());
		}
		usuarioService.atualizaUsuario(idUsuario, receptor);
		
	}

	public void deletarItemReceptor(String idUsuario, ObjectId idItem) throws Exception {
		Receptor usuario = (Receptor) usuarioService.pesquisaUsuarioId(idUsuario);
		Item item = itemService.findById(idItem);
		if(usuario.getItensNecessarios().contains(item)) {
			usuario.getItensNecessarios().remove(item);	
		}
		usuarioService.atualizaUsuario(idUsuario, usuario);
		
	}
}
