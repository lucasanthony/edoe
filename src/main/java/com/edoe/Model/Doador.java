package com.edoe.Model;

import java.util.ArrayList;
import java.util.List;

public class Doador extends Usuario {

	private static final String STATUS = "doador";


	public Doador(String id, String nome, String email, String celular, ClasseUsuario classe) {
		super(id, nome, email, celular, classe);
	}


	public static String getStatus() {
		return STATUS;
	}

	@Override
	public String toString() {
		return nome + "/" + id + ", " + email + ", " + celular + ", status: " + STATUS;
	}
	
	public String toStringDoacao() {
		return nome + "/" + id;
	}

}
