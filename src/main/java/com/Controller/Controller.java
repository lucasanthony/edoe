package com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.Models.Usuario;
import com.Services.ItemService;
import com.Services.UsuarioService;

@RestController
public class Controller {
	@Autowired
	private UsuarioService userService;

	@Autowired
	private ItemService itemService;

	public void init() {

	}

	public void cadastraUsuarioDoador() {

	}

	public void cadastrarUsuarioReceptor() {

	}

	public void atualizarReceptores() {

	}

	public void atualizarNomeUsuario(String id) {

	}

	public void atualizarEmailUsuario(String id) {

	}

	public void atualizarCelularUsuario(String id) {

	}

	public Usuario pesquisaUsuarioId(String id) {
		return userService.pesquisaUsuarioDoadorId(id);
	}

	public Usuario pesquisaUsuarioNome(String nome) {
		return userService.pesquisaUsuarioNome(nome);
	}

	public UsuarioService getUserService() {
		return userService;
	}

	public void setUserService(UsuarioService userService) {
		this.userService = userService;
	}

	public ItemService getItemService() {
		return itemService;
	}

	public void setItemService(ItemService itemService) {
		this.itemService = itemService;
	}

}
