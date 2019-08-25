package com.edoe.Service;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.ClasseUsuario;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.Usuario;
import com.edoe.Repository.UsuarioDAO;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioDAO usuarioDAO;

	public void insereUsuario(Usuario usuario) {
		usuarioDAO.save(usuario);
	}

	// FUNCIONANDO MAS O EASY ACCEPT NN TA RECONHECENDO, TESTEI NO POSTMAN
	public Usuario adicionaDoador(Usuario doador) throws Exception {
	
		if(verificaSeJaExiste(doador.getId()))
			throw new Exception("Usuario ja existente: " + doador.getId());
		
		//ClasseUsuario classeUser = ClasseUsuario.valueOf(classe);
		//Usuario doador = new Doador(id, nome, email, celular, classeUser);
		try {
			usuarioDAO.save(doador);
		} catch (ConstraintViolationException e) {
		    //DataIsNotValidException is our custom exception
		    throw new IllegalArgumentException("Data is not valid" + e.getMessage());
		}
		
		return doador;

	}
	
	private boolean verificaSeJaExiste(String id) {
		return usuarioDAO.existsById(id);
	}

	public Usuario atualizaUsuario(String id, Usuario usuario) throws Exception {
		if (id == null || id.equals(""))
			throw new Exception("Entrada invalida: id do usuario nao pode ser vazio ou nulo.");
		
		Usuario usuarioToUpdate = usuarioDAO.findUsuarioById(id);

		usuarioToUpdate = usuario;
		usuarioDAO.save(usuarioToUpdate);
		return usuarioToUpdate;
	}
	
	//OK
	public List<Usuario> pesquisaTodosUsuarios() {
		return usuarioDAO.findAll();
	}

	// OK
	public void deletarTodosUsuarios() {
		usuarioDAO.deleteAll();
	}

	// OK
	public Usuario pesquisaUsuarioId(String id) {
		return usuarioDAO.findUsuarioById(id);
	}

	// OK
	public String pesquisaUsuarioNome(String nome) {
		List<Usuario> usuarios = this.usuarioDAO.findAll();
		String retorno = "";
		for (Usuario usuario : usuarios) {
			if (usuario.getNome().equals(nome)) {
				retorno += usuario.toString() + " | ";
			}
		}
		return retorno;
	}

	// OK
	public Usuario removeUsuario(String id) throws Exception {
		if (id == null || id.equals(""))
			throw new Exception("Entrada invalida: id do usuario nao pode ser vazio ou nulo.");
		
		Usuario usuario = this.usuarioDAO.findUsuarioById(id);
		
		if (usuario == null)
			throw new Exception("Usuario nao encontrado: " + id);
		
		usuarioDAO.delete(usuario);
		return usuario;
	}

	public List<Item> pesquisaitensDoacao(String id) {
		Doador doador = (Doador) usuarioDAO.findUsuarioById(id);
		return doador.getItensDoacao();
		
	}

}
