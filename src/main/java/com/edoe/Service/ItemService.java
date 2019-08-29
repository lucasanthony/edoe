package com.edoe.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.DescritorItem;
import com.edoe.Model.Doacao;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.Matching;
import com.edoe.Model.Receptor;
import com.edoe.Model.TipoUsuario;
import com.edoe.Model.Usuario;
import com.edoe.Repository.DoacaoDAO;
import com.edoe.Repository.ItemDAO;
import com.edoe.Util.DescricaoComparator;
import com.edoe.Util.QuantidadeComparator;

@Service
public class ItemService {

	@Autowired
	private ItemDAO itemDAO;
	
	@Autowired
	private DoacaoDAO doacaoDAO;

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

	public Item findById(String id) {
		return itemDAO.findItemById(id);
	}

	public List<Item> retornaItens() {
		return this.itemDAO.findAll();
	}

	public void cadastraItemDoador(String idUsuario, Item item) throws Exception {
		item.setIdDoador(idUsuario);
		cadastraDescritor(item.getDescricao());
		itemDAO.save(item);
	}

	public void atualizaQuantidadeItem(String id, int quantidade) {
		Item item = itemDAO.findItemById(id);
		item.setQuantidade(quantidade);
		itemDAO.save(item);
	}

	public void atualizaItemDoador(String idUsuario, Item item) throws Exception {
		if(item.getIdDoador().equals(idUsuario)) {
			itemDAO.save(item);
		}
		
	}

	public void removerItemDoacao(String idDoador, String idItem) {
		Item item = this.itemService.findById(idItem);
		if (item.getIdDoador().equals(idDoador)) {
			itemDAO.delete(item);
		}
		
		
	}

	public void atualizarQuantidadeItemDoacao(String idDoador, String idItem, int quantidade) {
		Item item = this.itemService.findById(idItem);
		if (item.getIdDoador().equals(idDoador)) {
			this.itemService.atualizaQuantidadeItem(idItem, quantidade);
		}
		
	}

	/*
	 * public void atualizarTagsItemDoacao(String idDoador, String idItem, String
	 * tags) { Doador doador = (Doador)
	 * this.usuarioService.pesquisaUsuarioId(idDoador); Item item =
	 * this.itemService.findById(idItem); if
	 * (doador.getItensDoacao().contains(item)) {
	 * this.itemService.atualizaTagsItem(idItem, tags); } }
	 */

	public DescritorItem findDescritor(String descricao) {
		return descritorService.findById(descricao);
	}

	public boolean existeDescritor(String descricao) {
		return descritorService.existeDescritor(descricao);
	}

	public void cadastraDescritor(String descricao) throws Exception {
		if (!descritorService.existeDescritor(descricao)) {
			DescritorItem descritor = new DescritorItem(descricao);
			descritorService.insereDescritor(descritor);
		}
		
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
		if (receptor.getItensNecessarios().contains(item)) {
			int index = receptor.getItensNecessarios().indexOf(item);
			receptor.getItensNecessarios().get(index).setQuantidade(item.getQuantidade());
			receptor.getItensNecessarios().get(index).setTags(item.getTags());
		}
		usuarioService.atualizaUsuario(idUsuario, receptor);

	}

	public void deletarItemReceptor(String idUsuario, String idItem) throws Exception {
		Receptor usuario = (Receptor) usuarioService.pesquisaUsuarioId(idUsuario);
		Item item = itemService.findById(idItem);
		if (usuario.getItensNecessarios().contains(item)) {
			usuario.getItensNecessarios().remove(item);
		}
		usuarioService.atualizaUsuario(idUsuario, usuario);

	}

	public String retornaItemDesc() {
		String retorno = "";
		for (Item item : itemService.retornaItens()) {
			retorno += item.toStringDescQuant();
		}
		return retorno;
	}

	public List<Item> getItensNecessarios() {
		List<Item> itensNecessarios = new ArrayList<>();
		for (Item itemNec : itemService.retornaItens()) {
			if (itemNec.getTipoUsuario() == TipoUsuario.RECEPTOR) {
				itensNecessarios.add(itemNec);
			}
		}
		return itensNecessarios;
	}

	public List<Item> getItensSortQuant() {
		QuantidadeComparator qntComparator = new QuantidadeComparator();
		List<Item> listaOrdenada = itemService.retornaItens();
		Collections.sort(listaOrdenada, qntComparator);

		return listaOrdenada;
	}

	public List<Item> getItensSortDesc() {
		DescricaoComparator desc = new DescricaoComparator();
		List<Item> listaOrdenada = itemService.retornaItens();
		Collections.sort(listaOrdenada, desc);

		return listaOrdenada;
	}

	public List<Matching> matching(String id, String idItem) {
		Item item = this.itemDAO.findItemById(idItem);
		List<Item> itens = this.itemDAO.findItensBytipoUsuario(TipoUsuario.DOADOR);
		List<Matching> matches = new ArrayList<>();
		
		for (Item itemDoador : itens) {
			if (itemDoador.getDescricao().equals(item.getDescricao())) {
				Matching matching = new Matching(itemDoador);
				matches.add(matching);
			}
		}
		
		for (Matching matching : matches) {
			matching.somaPontos(this.pontosPorTags(item.getTags().split(","), matching.getItem().getTags().split(",")));
		}

		return matches;

	}

	private int pontosPorTags(String[] tags1, String[] tags2) {
		List<Object> tagsNecessario = Arrays.asList(tags1);
		List<Object> tagsDoacao = Arrays.asList(tags2);
		
		int retorno = 0;
		for (int i = 0; i < tagsNecessario.size(); i++) {
			if (tagsDoacao.contains(tagsNecessario.get(i))) {
				if (tagsNecessario.indexOf(tagsNecessario.get(i)) == tagsDoacao.indexOf(tagsNecessario.get(i))) {
					retorno += 5;
				} else {
					retorno += 2;
				}
			}
		}
		return retorno;
	}

	public void realizaDoacao(String idItemNecessario, String idItemDoador, String idReceptor) {
		Item itemNecessario = itemDAO.findItemById(idItemNecessario);
		Item itemDoador = itemDAO.findItemById(idItemDoador);
		Receptor receptor = (Receptor) usuarioService.pesquisaUsuarioId(idReceptor);
		Doador doador = (Doador) usuarioService.pesquisaUsuarioId(itemDoador.getIdDoador());
		if (itemNecessario.getDescricao().equals(itemDoador.getDescricao())) {
			itemDoador.setQuantidade(itemDoador.getQuantidade() - itemNecessario.getQuantidade());
			itemNecessario.setQuantidade(0);
			atualizaQuantidadeItem(idItemDoador, itemDoador.getQuantidade());
			atualizaQuantidadeItem(idItemNecessario, itemNecessario.getQuantidade());
			Doacao doacao = new Doacao(doador.toStringDoacao(), itemDoador.getDescricao(), receptor.toStringRecebimento());
			doacaoDAO.save(doacao);
		}
		
	}

	public List<Doacao> retornaDoacoes() {
		return doacaoDAO.findAll();
	}
}
