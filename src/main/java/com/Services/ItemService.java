package com.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Repositories.ItemDAO;

@Service
public class ItemService {

	@Autowired
	private ItemDAO itemDAO;
}
