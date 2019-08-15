package com.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Models.Doador;
import com.Models.Usuario;
import com.Repositories.DoadorDAO;

@Service
public class UsuarioService {
	@Autowired
	private DoadorDAO DoadorDAO;
	
	
	public List<Doador> pesquisaTodosDoadores(){
		return DoadorDAO.findAll();
	}

	public Usuario pesquisaUsuarioDoadorId(String Id) {
		return null;
	}

	public Usuario pesquisaUsuarioNome(String nome) {
		return null;
	}

}
