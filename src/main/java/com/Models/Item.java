package com.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "ITEM")
public class Item {
	@Id
	private String Id;

	private String descricao;

	public Item(String id, String descricao) {
		super();
		Id = id;
		this.descricao = descricao;
	}

	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}