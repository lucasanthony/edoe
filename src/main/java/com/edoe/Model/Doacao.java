package com.edoe.Model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DOACAO")
public class Doacao {
	
	private String itemDescricao;
	
	private String doador;
	
	private String receptor;
	
	private LocalDate date;

	public Doacao(String doador, String itemDescricao, String receptor) {
		super();
		this.doador = doador;
		this.itemDescricao = itemDescricao;
		this.receptor = receptor;
		this.date = LocalDate.now();
	}

	 

	public String getItem() {
		return itemDescricao;
	}



	public void setItem(String item) {
		this.itemDescricao = item;
	}



	public String getDoador() {
		return doador;
	}



	public void setDoador(String doador) {
		this.doador = doador;
	}



	public String getReceptor() {
		return receptor;
	}



	public void setReceptor(String receptor) {
		this.receptor = receptor;
	}



	public String getDate() {		
		return DateTimeFormatter.ofPattern("yyy/MM/dd").format(date);
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
	

}
