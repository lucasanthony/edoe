package com.Models;

import java.util.List;

import org.bson.types.ObjectId;

public class Doador extends Usuario {

	
	
	private static final String STATUS = "doador";
	
	private List<Item> itensDoacao;
	
	public Doador(String nome, ObjectId id, String email, String celular, ClasseUsuario classe) {
		super(nome, id, email, celular, classe);
		// TODO Auto-generated constructor stub
	}

	
	public void cadastraItem(Item item) {
		this.itensDoacao.add(item);
	}
	
	
	
	
	public List<Item> getItensDoacao() {
		return itensDoacao;
	}


	public void setItensDoacao(List<Item> itensDoacao) {
		this.itensDoacao = itensDoacao;
	}


	public static String getStatus() {
		return STATUS;
	}


	@Override
	public String toString() {
		return nome + "/" + id + ", " + email + ", " + celular + ", status: " + STATUS;
	}

	
}
