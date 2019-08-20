package com.edoe.Service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.Item;
import com.edoe.Repository.ItemDAO;

@Service
public class ItemService {

	@Autowired
	private ItemDAO itemDAO;
	
	public void cadastrarItem(Item item) {
		itemDAO.insert(item);
	}
	
	public Item findById(ObjectId id) {
		return itemDAO.findItemById(id);
	}
	
	public List<Item> retornaItens(){
		return this.itemDAO.findAll();
	}
	
	public void atualizaQuantidadeItem(ObjectId id, int quantidade) {
		Item item = itemDAO.findItemById(id);
		item.setQuantidade(quantidade);
		itemDAO.save(item);
	}

	public void atualizaTagsItem(ObjectId idItem, String tags) {
		Item item = itemDAO.findItemById(idItem);
		String[] array = tags.split(",");
		for (String tag : array) {
			item.getTags().add(tag);
		}
		itemDAO.save(item);
		
	}
	
}
