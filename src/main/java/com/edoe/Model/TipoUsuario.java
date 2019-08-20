package com.edoe.Model;

public enum TipoUsuario {

	DOADOR("doador"),
	RECEPTOR("receptor");
	
	private String tipoUsuario;

	private TipoUsuario(String tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	public String getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(String tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}
	
}
