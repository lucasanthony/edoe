package com.edoe.Controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

	@PostMapping("/cadastraItem")
	public Item cadastrarItem(@RequestBody Item item) {
		return itemService.cadastrarItem(item);
	}

	@PostMapping("/cadastraDescritor")
	public void cadastrarDescritor(@RequestBody DescritorItem descritor) {
		descritorService.insereDescritor(descritor);
	}

	@GetMapping("/descritores")
	public List<DescritorItem> getDescritores() {
		return descritorService.carregaDescritores();
	}

	@GetMapping("/encontrar/{id}")
	public Item findById(@PathVariable ObjectId id) {
		return this.itemService.findById(id);
	}

	@GetMapping()
	public List<Item> retornaItens() {
		return this.itemService.retornaItens();
	}

	public void atualizarItem(String idUsuario, Item item) {
		itemService.atualizaItem(idUsuario, item);
	}
	
	@GetMapping("/descritoresQuant")
	public String retornaItemDesc() {
		String retorno = "";
		for (Item item : itemService.retornaItens()) {
			retorno += item.toStringDescQuant();  
		}
		return retorno;
	}

}
