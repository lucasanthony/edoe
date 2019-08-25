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

import com.edoe.Model.DescritorItem;
import com.edoe.Model.Item;
import com.edoe.Service.DescritorItemService;
import com.edoe.Service.ItemService;

@RestController
@RequestMapping({ "/item" })
public class ItemController {

	@Autowired
	private ItemService itemService;

	@Autowired
	private DescritorItemService descritorService;

	/*@PostMapping("/cadastraItem")
	public Item cadastrarItem(@RequestBody Item item) {
		return itemService.cadastrarItem(item);
	}*/

	@PostMapping("/cadastraItemDoador/{usuarioId}")
	public void cadastrarItemDoador(@PathVariable String usuarioId, @RequestBody Item item) {
		try {
			itemService.cadastrarItem(item);
			itemService.cadastraItemDoador(usuarioId, item);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@GetMapping("/encontrar/{id}")
	public Item findById(@PathVariable ObjectId id) {
		return this.itemService.findById(id);
	}

	@GetMapping()
	public List<Item> retornaItens() {
		return this.itemService.retornaItens();
	}
	
	@DeleteMapping("deletarItemDoador/{id}/{Id}")
	public void deletarItemDoador(@PathVariable String id, @PathVariable ObjectId Id) throws Exception {
		itemService.deletarItemDoador(id, Id);
	}

	@PutMapping("atualizarItemDoador/{idUsuario}")
	public void atualizarItem(@PathVariable String idUsuario, @RequestBody Item item) throws Exception {
		itemService.atualizaItem(idUsuario, item);
	}
	
	@DeleteMapping()
	public void deletarTodosItens() {
		itemService.deletarTodos();
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
