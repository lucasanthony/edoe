package com.Services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
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
		Usuario usuarioToUpdate = usuarioDAO.findUsuarioby_Id(usuario.getId());
		usuarioDAO.save(usuarioToUpdate);
	}
	
	public List<Usuario> pesquisaTodosUsuarios(){
		return usuarioDAO.findAll();
	}

	public Usuario pesquisaUsuarioId(ObjectId id) {
		return usuarioDAO.findUsuarioby_Id(id);
	}

	public String pesquisaUsuarioNome(String nome) {
		List<Usuario> usuarios = this.usuarioDAO.findAll();
		String retorno = "";
		for (Usuario usuario : usuarios) {
			if(usuario.getNome().equals(nome)) {
				retorno += usuario.toString() + " | ";
			}
		}
		return retorno;
	}
	
	public void deletaUsuario(ObjectId id) {
		Usuario usuario = this.usuarioDAO.findUsuarioby_Id(id);
		usuarioDAO.delete(usuario);
	}

}
