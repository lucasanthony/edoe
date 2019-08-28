package com.edoe.Model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DOACAO")
public class Doacao {
	
	private Item item;
	
	private LocalDate date;

	public Doacao(Item item) {
		super();
		this.item = item;
		this.date = LocalDate.now();
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public String getDate() {		
		return DateTimeFormatter.ofPattern("yyy/MM/dd").format(date);
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
	

}
