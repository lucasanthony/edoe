package com.Models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DOADOR")
public class Usuario {

	private String nome;

	private TipoUsuario tipo;

	@Id
	private String id;

	private String email;

	private String celular;

	private ClasseUsuario classe;

	private List<Item> itensDoacao;

	public Usuario(String nome, String id, String email, String celular, ClasseUsuario classe) {
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

	public List<Item> getItensDoacao() {
		return itensDoacao;
	}

	public void setItensDoacao(List<Item> itensDoacao) {
		this.itensDoacao = itensDoacao;
	}

	public TipoUsuario getTipo() {
		return tipo;
	}

	public void setTipo(TipoUsuario tipo) {
		this.tipo = tipo;
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
		Usuario other = (Usuario) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return nome + "/" + id + ", " + email + ", " + celular + ", status: " + tipo;
	}

}
