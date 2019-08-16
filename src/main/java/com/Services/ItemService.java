package com.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Models.Item;
import com.Repositories.ItemDAO;

@Service
public class ItemService {

	@Autowired
	private ItemDAO itemDAO;
	
	public void cadastrarItem(Item item) {
		itemDAO.insert(item);
	}
	
}
