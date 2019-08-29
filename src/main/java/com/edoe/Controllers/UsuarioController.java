package com.edoe.Controllers;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edoe.Model.ClasseUsuario;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.Receptor;
import com.edoe.Model.Usuario;
import com.edoe.Service.UsuarioService;

@RestController
@RequestMapping({ "/usuario" })
@CrossOrigin(value = "*")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	private String path = "C:\\novosReceptores.csv";

	@PostMapping("/doador")
	public Usuario cadastraDoador(@RequestBody Doador doador) throws Exception {
		return usuarioService.adicionaDoador(doador);
	}

	@GetMapping
	public List<Usuario> pesquisaTodosusuarios() {
		return this.usuarioService.pesquisaTodosUsuarios();
	}
	
	@GetMapping("itensdoacao/{id}")
	public List<Item> pesquisaItemsDoacao(@PathVariable String idUsuario) {
		return this.usuarioService.pesquisaitensDoacao(idUsuario);
	}

	@PostMapping("/receptor")
	public void cadastrarReceptor() throws IOException {
		Scanner sc = new Scanner(new File(path));
		String linha = null;
		while (sc.hasNextLine()) {
			linha = sc.nextLine();
			String[] dados = linha.split(",");

			if (dados.length != 5) {
				throw new IOException("não chegpu aqui");
			}
			System.out.println(ClasseUsuario.valueOf(dados[4]));
			// ACHAR UMA MANEIRA DE DEFINIR UMA CLASSE ATRAVES DA STRING RECEBIDA
			Receptor receptor = new Receptor(dados[0], dados[1], dados[2], dados[3], ClasseUsuario.valueOf(dados[4]));
			usuarioService.insereUsuario(receptor);
		}
		sc.close();

	}

	@PutMapping("/{idUsuario}")
	public Usuario atualizarUsuario(@PathVariable String idUsuario, @RequestBody Usuario usuario) throws Exception {
		return usuarioService.atualizaUsuario(idUsuario, usuario);
	}

	@GetMapping("id/{idUsuario}")
	public Usuario pesquisaUsuarioDoadorId(@PathVariable String idUsuario) {
		return usuarioService.pesquisaUsuarioId(idUsuario);
	}

	@GetMapping("/{nome}")
	public String pesquisaUsuarioNome(@PathVariable String nome) {
		return this.usuarioService.pesquisaUsuarioNome(nome);
	}

	@DeleteMapping("/{id}")
	public Usuario removeUsuario(@PathVariable String id) throws Exception {
		return this.usuarioService.removeUsuario(id);
	}

	@DeleteMapping
	public void deletarTodosUsuarios() {
		this.usuarioService.deletarTodosUsuarios();
	}

}
