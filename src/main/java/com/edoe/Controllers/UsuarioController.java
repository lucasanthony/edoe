package com.edoe.Controllers;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edoe.Model.Receptor;
import com.edoe.Model.Usuario;
import com.edoe.Service.UsuarioService;

@RestController
@RequestMapping({ "/usuario" })
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	private String path = "C:\\novosReceptores.csv";

	@PostMapping("/adicionadoador")
	public Usuario adicionaDoador(@RequestBody Usuario doador) throws Exception {
		return usuarioService.adicionaDoador(doador.getId(), doador.getNome(), doador.getEmail(), doador.getCelular(), doador.getClasse().getClasseUsuario());
	}

	@GetMapping
	public List<Usuario> pesquisaTodosusuarios() {
		return this.usuarioService.pesquisaTodosUsuarios();
	}

	public void lerReceptores(String caminho) {
		// Aqui vão ser lidos os receptores, assinatura e parametro conforme
		// está no teste
	}

	@PostMapping("/insereReceptor")
	public void cadastrarUsuarioReceptor() throws IOException {
		Scanner sc = new Scanner(new File(path));
		String linha = null;
		while (sc.hasNextLine()) {
			linha = sc.nextLine();
			String[] dados = linha.split(",");

			if (dados.length != 5) {
				throw new IOException("não chegpu aqui");
			}
			System.out.println(dados[1] + " | " + dados[2] + " | " + dados[3] + " | " + dados[4]);
			// ACHAR UMA MANEIRA DE DEFINIR UMA CLASSE ATRAVES DA STRING RECEBIDA
			Receptor receptor = new Receptor(dados[1], dados[2], dados[3], null, null);
			usuarioService.insereUsuario(receptor);
		}
		sc.close();

	}

	public void atualizarReceptores() {

	}

	@PutMapping("/atualizanome")
	public Usuario atualizarNomeUsuario(String id, String nome) {
		usuarioService.pesquisaUsuarioId(id).setNome(nome);
		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	@PutMapping("/atualizaemail")
	public Usuario atualizarEmailUsuario(String id, String email) {
		usuarioService.pesquisaUsuarioId(id).setEmail(email);
		;
		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	@PutMapping("/atualizacelular")
	public Usuario atualizarCelularUsuario(String id, String celular) {
		usuarioService.pesquisaUsuarioId(id).setCelular(celular);
		;
		return usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
	}

	@GetMapping("/buscaid/{id}")
	public Usuario pesquisaUsuarioDoadorId(@PathVariable String id) {
		return usuarioService.pesquisaUsuarioId(id);
	}

	@GetMapping("/buscanome/{nome}")
	public String pesquisaUsuarioNome(@PathVariable String nome) {
		return this.usuarioService.pesquisaUsuarioNome(nome);
	}

	@DeleteMapping("/deleta/{id}")
	public Usuario deletarUsuario(@PathVariable String id) {
		return this.usuarioService.deletaUsuario(id);
	}

	@DeleteMapping
	public void deletarTodosUsuarios() {
		this.usuarioService.deletarTodosUsuarios();
	}

}
