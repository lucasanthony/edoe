package com.edoe.Model;

import java.util.ArrayList;
import java.util.List;

public class Doador extends Usuario {

	private static final String STATUS = "doador";

	private List<Item> itensDoacao;

	public Doador(String nome, String email, String celular, ClasseUsuario classe) {
		super(nome, email, celular, classe);
		this.itensDoacao = new ArrayList<Item>();
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
