package com.edoe.Controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.edoe.Model.Doador;
import com.edoe.Model.Usuario;
import com.edoe.Service.UsuarioService;

@RestController
@RequestMapping({"/usuario"})
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
 	
	@PostMapping
 	public void adicionaDoador(@RequestBody Doador doador) {
 		usuarioService.insereUsuario(doador);
 
 	}
	
	@GetMapping
	public List<Usuario> pesquisaTodosusuarios(){
		return this.usuarioService.pesquisaTodosUsuarios();
	}
	
 	public void cadastrarUsuarioReceptor() {
 
 	}
 
 	public void atualizarReceptores() {
 
 	}
 
 	@PutMapping("/atualizanome")
 	public Usuario atualizarNomeUsuario(ObjectId id, String nome) {
 		usuarioService.pesquisaUsuarioId(id).setNome(nome);
 		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	@PutMapping("/atualizaemail")
 	public Usuario atualizarEmailUsuario(ObjectId id, String email) {
 		usuarioService.pesquisaUsuarioId(id).setEmail(email);;
 		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	@PutMapping("/atualizacelular")
 	public Usuario atualizarCelularUsuario(ObjectId id, String celular) {
 		usuarioService.pesquisaUsuarioId(id).setCelular(celular);;
 		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	@GetMapping("/buscaid/{id}")
 	public Usuario pesquisaUsuarioDoadorId(@PathVariable ObjectId id) {
 		return usuarioService.pesquisaUsuarioId(id);
 	}
 
 	@GetMapping("/buscanome/{nome}")
 	public String pesquisaUsuarioNome(@PathVariable String nome) {
 		return this.usuarioService.pesquisaUsuarioNome(nome);
 	}
 	
 	@DeleteMapping("/deleta/{id}")
 	public Usuario deletarUsuario(@PathVariable ObjectId id) {
 		return this.usuarioService.deletaUsuario(id);
 	}
 	

}
