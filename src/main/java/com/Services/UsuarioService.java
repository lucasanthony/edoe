package com.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Models.Usuario;
import com.Repositories.UsuarioDAO;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	public void insereUsuario(Usuario usuario) {
		usuarioDAO.insert(usuario);
	}
	
	public void atualizaUsuario(Usuario usuario) {
		usuarioDAO.save(usuario);
	}
	
	public List<Usuario> pesquisaTodosUsuarios(){
		return usuarioDAO.findAll();
	}

	public Usuario pesquisaUsuarioId(String Id) {
		return usuarioDAO.findById(Id).get();
	}

	public Usuario pesquisaUsuarioNome(String nome) {
		return null;
	}
	
	public void deletaUsuario(String Id) {
		usuarioDAO.deleteById(Id);
	}

}
