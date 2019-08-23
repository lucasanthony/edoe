package com.edoe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.ClasseUsuario;
import com.edoe.Model.Doador;
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
	public Usuario adicionaDoador(String id, String nome, String email, String celular, String classe) throws Exception {
		String flag = validaParametros(id, nome, email, celular, classe);
		if (!flag.equals("ok"))
			throw new Exception(flag);
		
		if(verificaSeJaExiste(id))
			throw new Exception("Usuario ja existente: " + id);
		
		ClasseUsuario classeUser = ClasseUsuario.valueOf(classe);
		Usuario doador = new Doador(id, nome, email, celular, classeUser);
		usuarioDAO.save(doador);
		return doador;

	}
	
	private boolean verificaSeJaExiste(String id) {
		return usuarioDAO.existsById(id);
	}
	
	// OK, FALTA CHECAR CLASSE INVALIDA
	private String validaParametros(String id, String nome, String email, String celular, String classe) throws Exception {
		String msg = "Entrada invalida:";
		if (id == null || id.equals(""))
			msg+=" id do usuario nao pode ser vazio ou nulo.";
		else if (nome == null || nome.equals(""))
			msg+=" nome nao pode ser vazio ou nulo.";
		else if (email == null || email.equals(""))
			msg+=" email nao pode ser vazio ou nulo.";
		else if (celular == null || celular.equals(""))
			msg+=" celular nao pode ser vazio ou nulo.";
		else if (classe == null || classe.equals(""))
			msg+=" classe nao pode ser vazia ou nula.";
		else
			msg = "ok";
		
		return msg;
			
	}

	
	public Usuario atualizaUsuario(String id, String nome, String email, String celular) throws Exception {
		if (id == null || id.equals(""))
			throw new Exception("Entrada invalida: id do usuario nao pode ser vazio ou nulo.");
		
		Usuario usuarioToUpdate = usuarioDAO.findUsuarioById(id);
		
		if (usuarioToUpdate == null)
			throw new Exception("Usuario nao encontrado: " + id);
		
		if (nome != null && !nome.equals(""))
			usuarioToUpdate.setNome(nome);
		
		if (email != null && email.equals(""))
			usuarioToUpdate.setEmail(email);
		
		if (celular != null && !celular.equals(""))
			usuarioToUpdate.setCelular(celular);
		
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

}
