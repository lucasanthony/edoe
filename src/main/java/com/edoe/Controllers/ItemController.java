package com.edoe.Controllers;

import java.util.ArrayList;
import java.util.Collections;
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

import com.edoe.Model.DescritorItem;
import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.TipoUsuario;
import com.edoe.Model.Usuario;
import com.edoe.Service.DescritorItemService;
import com.edoe.Service.ItemService;
import com.edoe.Service.UsuarioService;
import com.edoe.Util.DescricaoComparator;
import com.edoe.Util.QuantidadeComparator;

@RestController
@RequestMapping({ "/item" })
public class ItemController {

	@Autowired
	private ItemService itemService;
	
	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private DescritorItemService descritorService;

	/*@PostMapping("/cadastraItem")
	public Item cadastrarItem(@RequestBody Item item) {
		return itemService.cadastrarItem(item);
	}*/

	@PostMapping("/cadastraItemDoador/{usuarioId}")
	public void cadastrarItemDoador(@PathVariable String usuarioId, @RequestBody Item item) {
		try {
			item.setTipoUsuario(TipoUsuario.DOADOR);
			itemService.cadastrarItem(item);
			itemService.cadastraItemDoador(usuarioId, item);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PostMapping("/cadastraItemReceptor/{usuarioId}")
	public void cadastrarItemReceptor(@PathVariable String usuarioId, @RequestBody Item item) {
		try {
			item.setTipoUsuario(TipoUsuario.RECEPTOR);
			itemService.cadastrarItem(item);
			itemService.cadastraItemReceptor(usuarioId, item);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@GetMapping("/itensOrdemDesc")
	public List<Item> getItensSortDesc(){
		DescricaoComparator desc = new DescricaoComparator();
		List<Item> listaOrdenada = itemService.retornaItens();
		Collections.sort(listaOrdenada, desc);
		
		return listaOrdenada;
	}
	
	@GetMapping("/itensOrdemQuant")
	public List<Item> getItensSortQuant(){
		QuantidadeComparator qntComparator = new QuantidadeComparator();
		List<Item> listaOrdenada = itemService.retornaItens();
		Collections.sort(listaOrdenada, qntComparator);
		
		return listaOrdenada;
	}
	
	@GetMapping("/itensNecessarios")
	public List<Item> getItensNecessarios(){
		List<Item> itensNecessarios = new ArrayList<>();
		for (Item itemNec : itemService.retornaItens()) {
			if(itemNec.getTipoUsuario() == TipoUsuario.RECEPTOR) {
				itensNecessarios.add(itemNec);
			}
		}
		return itensNecessarios;
	}

	@GetMapping("/encontrar/{id}")
	public Item findById(@PathVariable String id) {
		return this.itemService.findById(id);
	}

	@GetMapping()
	public List<Item> retornaItens() {
		return this.itemService.retornaItens();
	}
	
	@DeleteMapping("deletarItemDoador/{id}/{Id}")
	public void deletarItemDoador(@PathVariable String id, @PathVariable String Id) throws Exception {
		itemService.deletarItemDoador(id, Id);
	}

	@PutMapping("atualizarItemDoador/{idUsuario}")
	public void atualizarItemDoador(@PathVariable String idUsuario, @RequestBody Item item) throws Exception {
		itemService.atualizaItemDoador(idUsuario, item);
	}
	
	@PutMapping("atualizarItemReceptor/{idUsuario}")
	public void atualizarItemReceptor(@PathVariable String idUsuario, @RequestBody Item item) throws Exception {
		itemService.atualizaItemReceptor(idUsuario, item);
	}
	
	@DeleteMapping("deletarItemReceptor/{id}/{Id}")
	public void deletarItemReceptor(@PathVariable String id, @PathVariable String Id) throws Exception {
		itemService.deletarItemReceptor(id, Id);
	}
	
	
	@DeleteMapping()
	public void deletarTodosItens() {
		itemService.deletarTodos();
	}
	
	public List<Item> matching(String idReceptor, String descricao){
		List<Item> itens = new ArrayList<>();
		List<Item> matches = new ArrayList<>();
		for (Usuario usuario : usuarioService.pesquisaTodosUsuarios()) {
			if (usuario instanceof Doador) {
				itens.addAll(((Doador) usuario).getItensDoacao());
			}
		}
		
		for (Item item : itens) {
			if(item.getDescricao().equals(descricao)) {
				matches.add(item);
			}
		}
		
		return matches;
	}
	
	//DESCRITORES
	
	@PostMapping("/cadastraDescritor")
	public void cadastrarDescritor(@RequestBody DescritorItem descritor) {
		descritorService.insereDescritor(descritor);
	}
	
	@GetMapping("/descritoresQuant")
	public String retornaItemDesc() {
		String retorno = "";
		for (Item item : itemService.retornaItens()) {
			retorno += item.toStringDescQuant();  
		}
		return retorno;
	}
	

	@GetMapping("/descritores")
	public List<DescritorItem> getDescritores() {
		return descritorService.carregaDescritores();
	}


}
