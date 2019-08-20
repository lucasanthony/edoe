package com.edoe.Controllers;

import java.util.List;
import java.util.Optional;

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

import com.edoe.Model.ClasseUsuario;
import com.edoe.Model.DescritorItem;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.TipoUsuario;
import com.edoe.Model.Usuario;
import com.edoe.Service.DescritorItemService;
import com.edoe.Service.ItemService;
import com.edoe.Service.UsuarioService;

@RestController
@RequestMapping({"/edoe"})
public class Controller {
	
	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private ItemService itemService;
	
	@Autowired
	private DescritorItemService descritorService;
	
	private List<DescritorItem> descritores;
	public void init() {
 		carregaDescritoresItens();
 	}
 	
	
 	// USUARIO
 	
	@PostMapping
 	public void adicionaDoador(@RequestBody Doador  doador) {
 		usuarioService.insereUsuario(doador);
 
 	}
	
	@GetMapping
	public List<Usuario> pesquisaTodosusuarios(){
		System.out.println("oaksaoskkaosakoskaoskaosoaskoa aoskaoskakosakosako");
		return this.usuarioService.pesquisaTodosUsuarios();
	}
	
 	public void cadastrarUsuarioReceptor() {
 
 	}
 
 	public void atualizarReceptores() {
 
 	}
 
 	@PutMapping
 	public void atualizarNomeUsuario(ObjectId id, String nome) {
 		usuarioService.pesquisaUsuarioId(id).setNome(nome);
 		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	public void atualizarEmailUsuario(ObjectId id, String email) {
 		usuarioService.pesquisaUsuarioId(id).setEmail(email);;
 		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	public void atualizarCelularUsuario(ObjectId id, String celular) {
 		usuarioService.pesquisaUsuarioId(id).setCelular(celular);;
 		usuarioService.atualizaUsuario(usuarioService.pesquisaUsuarioId(id));
 	}
 
 	@GetMapping("/buscaId/{id}")
 	public Usuario pesquisaUsuarioDoadorId(@PathVariable ObjectId id) {
 		return usuarioService.pesquisaUsuarioId(id);
 	}
 
 	@GetMapping("/buscaNome/{nome}")
 	public String pesquisaUsuarioNome(@PathVariable String nome) {
 		return usuarioService.pesquisaUsuarioNome(nome);
 	}
 	
 	@DeleteMapping("/{id}")
 	public void deletarUsuario(@PathVariable ObjectId id) {
 		usuarioService.deletaUsuario(id);
 	}
 	
 	// ITEM
 	
 	public void cadastrarItem(Item item) {
 		itemService.cadastrarItem(item);
 	}
 	
 	public boolean checaItemDoacao(String descricao) {
 		boolean retorno = false;
 		for (DescritorItem descritorItem : descritores) {
 			if(descritorItem.getDescricao().equals(descricao)) {
 				retorno = true;
 			}
 		}
 		return retorno;
 	}
 	
 	public void cadastraItemDoacao(ObjectId idDoador, ObjectId idItem, String descricao, int quantidade, String tags) {
 		
 		Doador doador = (Doador) usuarioService.pesquisaUsuarioId(idDoador);
 		if (!checaItemDoacao(descricao)) {
 			cadastraDescritor(descricao);
 			Item item = new Item(idItem, findDescritor(descricao), quantidade, tags);
 			doador.cadastraItem(item);
 		}
 		Item item = new Item(idItem, findDescritor(descricao), quantidade, tags);
 		doador.cadastraItem(item);
 	}
 	
 	public void removerItemDoacao(ObjectId idDoador, ObjectId idItem) {
 		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
 		Item item = this.itemService.findById(idItem);
 		if(doador.getItensDoacao().contains(item)) {
 			doador.getItensDoacao().remove(item);
 		}
 	}
 	
 	public void atualizarQuantidadeItemDoacao(ObjectId idDoador, ObjectId idItem, int quantidade) {
 		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
 		Item item = this.itemService.findById(idItem);
 		if(doador.getItensDoacao().contains(item)) {
 			this.itemService.atualizaQuantidadeItem(idItem, quantidade);
 		}
 	}
 	
 
 	public void atualizarTagsItemDoacao(ObjectId idDoador, ObjectId idItem, String tags) {
 		Doador doador = (Doador) this.usuarioService.pesquisaUsuarioId(idDoador);
 		Item item = this.itemService.findById(idItem);
 		if(doador.getItensDoacao().contains(item)) {
 			this.itemService.atualizaTagsItem(idItem, tags);
 		}
 	}
 	
 	 //DESCRITOR DE ITEM
 
 	private void carregaDescritoresItens() {
 		descritores = descritorService.carregaDescritores();
 		
 	}
 
 	public DescritorItem findDescritor(String descricao) {
 		return descritorService.findById(descricao);
 	}
 		
 	public boolean existeDescritor(String descricao) {
 		return descritorService.existeDescritor(descricao);
 	}
 	
 	public void cadastraDescritor(String descricao) {
 		DescritorItem descritor = new DescritorItem(descricao);
 		descritorService.insereDescritor(descritor);
 	}
 	
 	public String retornaDescritores() {
 		String retorno = "";
 		for (Item item : this.itemService.retornaItens()) {
 			retorno += item.toStringDescQuant();
 		}
 		return retorno;
 	}
 
 	
 	
 	public UsuarioService getusuarioService() {
 		return usuarioService;
 	}
 
 	public void setusuarioService(UsuarioService usuarioService) {
 		this.usuarioService = usuarioService;
 	}
 
 	public ItemService getItemService() {
 		return itemService;
 	}
 
 	public void setItemService(ItemService itemService) {
 		this.itemService = itemService;
 	}

}
