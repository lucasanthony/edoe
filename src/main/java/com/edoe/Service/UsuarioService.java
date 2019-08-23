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
	
	// FUNCIONANDO NO EASY ACCEPT
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

	public Usuario atualizaUsuario(Usuario usuario) {
		Usuario usuarioToUpdate = usuarioDAO.findUsuarioById(usuario.getId());
		usuarioDAO.save(usuarioToUpdate);
		return usuarioToUpdate;
	}

	public List<Usuario> pesquisaTodosUsuarios() {
		return usuarioDAO.findAll();
	}

	public void deletarTodosUsuarios() {
		usuarioDAO.deleteAll();
	}

	public Usuario pesquisaUsuarioId(String id) {
		return usuarioDAO.findUsuarioById(id);
	}

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

	public Usuario deletaUsuario(String id) {
		Usuario usuario = this.usuarioDAO.findUsuarioById(id);
		usuarioDAO.delete(usuario);
		return usuario;
	}

}
