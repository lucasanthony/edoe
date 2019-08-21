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

import com.edoe.Model.Item;
import com.edoe.Service.ItemService;

@RestController
@RequestMapping({"/item"})
public class ItemController {

	@Autowired
	private ItemService itemService;

	@PostMapping("/cadastra")
	public Item cadastrarItem(@RequestBody Item item) {
		return itemService.cadastrarItem(item);
	}
	
	@GetMapping("/encontrar/{id}")
	public Item findById(@PathVariable ObjectId id) {
		return this.itemService.findById(id);
	}
	
	@GetMapping("/listatodos")
	public List<Item> retornaItens() {
		return this.itemService.retornaItens();
	}
	
	

	
}
