package com.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.Models.ClasseUsuario;
import com.Models.DescritorItem;
import com.Models.Item;
import com.Models.TipoUsuario;
import com.Models.Usuario;
import com.Services.DescritorItemService;
import com.Services.ItemService;
import com.Services.UsuarioService;

@RestController
public class Controller {
	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private ItemService itemService;
	
	@Autowired
	private DescritorItemService descritorService;
	
	private List<DescritorItem> descritores;
	public void init() {

	}
	

	public void cadastraUsuarioDoador(String nome, String id, String email, String celular, ClasseUsuario classe) {
		Usuario doador = new Usuario(nome, id, email, celular, classe);
		doador.setTipo(TipoUsuario.DOADOR);
		usuarioService.insereUsuario(doador);

	}

	public void cadastrarUsuarioReceptor() {

	}

	public void atualizarReceptores() {

	}

	public void atualizarNomeUsuario(String id, String nome) {
		usuarioService.pesquisaUsuarioId(id).setNome(nome);
		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	public void atualizarEmailUsuario(String id, String email) {
		usuarioService.pesquisaUsuarioId(id).setEmail(email);;
		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	public void atualizarCelularUsuario(String id, String celular) {
		usuarioService.pesquisaUsuarioId(id).setCelular(celular);;
		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	public Usuario pesquisaUsuarioDoadorId(String id) {
		return usuarioService.pesquisaUsuarioId(id);
	}

	public Usuario pesquisaUsuarioNome(String nome) {
		return usuarioService.pesquisaUsuarioNome(nome);
	}
	
	public void deletarUsuario(String Id) {
		usuarioService.deletaUsuario(Id);
	}
	
	public boolean existeDescritor(String descricao) {
		return descritorService.existeDescritor(descricao);
	}
	public void cadastraDescritor(String descricao) {
		DescritorItem descritor = new DescritorItem(descricao);
		descritorService.insereDescritor(descritor);
	}

	public void cadastrarItem(Item item) {
		itemService.cadastrarItem(item);
	}
	
	public UsuarioService getusuarioService() {
		return usuarioService;
	}

	public void setusuarioService(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}

	public ItemService getItemService() {
		return itemService;
	}

	public void setItemService(ItemService itemService) {
		this.itemService = itemService;
	}

}
