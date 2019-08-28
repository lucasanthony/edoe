package com.edoe.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Document(collection = "ITEM")
public class Item {
	@Id
	private String id;

	private String descricao;
	
	private String tags;
	
	private int quantidade;
	
	private TipoUsuario tipoUsuario;
	
	private String idDoador;

	public Item(String descricao, int quantidade, String tags, String idDoador) {
		super();
		this.descricao = descricao;
		this.quantidade = quantidade;
		this.tags = tags;
		this.idDoador = idDoador;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}


	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
		

	public TipoUsuario getTipoUsuario() {
		return tipoUsuario;
	}

	public String getIdDoador() {
		return idDoador;
	}

	public void setIdDoador(String idDoador) {
		this.idDoador = idDoador;
	}

	public void setTipoUsuario(TipoUsuario tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
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
		Item other = (Item) obj;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public String toStringDescQuant() {
		return quantidade + " - " + descricao + " | ";
	}

	
	
	

}