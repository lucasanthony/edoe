package com.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "RECEPTOR")
public class Receptor {

	private String nome;

	private static final String STATUS = "receptor";

	@Id
	private String id;

	private String email;

	private String celular;

	private ClasseUsuario classe;

	public Receptor() {

	}

	public Receptor(String nome, String id, String email, String celular, ClasseUsuario classe) {
		this.nome = nome;
		this.id = id;
		this.email = email;
		this.celular = celular;
		this.classe = classe;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public ClasseUsuario getClasse() {
		return classe;
	}

	public void setClasse(ClasseUsuario classe) {
		this.classe = classe;
	}

	public static String getStatus() {
		return STATUS;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Receptor other = (Receptor) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return nome + "/" + id + ", " + email + ", " + celular + ", status: " + STATUS;
	}

}
