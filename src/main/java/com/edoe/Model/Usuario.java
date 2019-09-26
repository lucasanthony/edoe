package com.edoe.Model;


import java.util.Objects;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "USUARIO")
public class Usuario {

	@NotEmpty(message = "O nome não pode ser vazio")
	protected String nome;

	@Id
	@NotEmpty(message = "O ID não pode ser vazio")
	protected String id;
	
	@NotEmpty(message = "O email não pode ser vazio")
	@Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
	protected String email;

	@NotEmpty(message = "O celular não pode ser vazio")
	protected String celular;
	
	protected String password;
	
	@DBRef
	protected Set<Role> roles;

	protected ClasseUsuario classe;
	
	protected boolean enabled;


	public Usuario(String id, String nome, String email, String celular, ClasseUsuario classe) {
		super();
		
		this.id = Objects.requireNonNull(id, "id must not be null");
		this.nome = Objects.requireNonNull(nome, "nome must not be null");
		this.email = Objects.requireNonNull(email, "email must not be null");
		this.celular = Objects.requireNonNull(celular, "celular must not be null");
		this.classe = Objects.requireNonNull(classe, "classe must not be null");
	}

	public Usuario() {
		// TODO Auto-generated constructor stub
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



	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
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
		return nome + "/" + id + ", " + email + ", " + celular;
	}

}
