package com.edoe.Model;

public class Receptor extends Usuario {

	private static final String STATUS = "receptor";

	public Receptor(String nome, String email, String celular, ClasseUsuario classe) {
		super(nome, email, celular, classe);
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
