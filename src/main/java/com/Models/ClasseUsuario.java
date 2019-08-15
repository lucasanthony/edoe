package com.Models;

public enum ClasseUsuario {
	PESSOA_FISICA("pessoa fisica"), IGREJA("igreja"), ORGAO_PUBLICO_MUNICIPAL("orgao publico municipal"),
	ORGAO_PUBLICO_ESTADUAL("orgao publico estadual"), ORGAO_PUBLICO_FEDERAL("orgao publico federal"), ONG("ong"),
	ASSOCIACAO("associacao"), SOCIEDADE("sociedade");

	private String classeUsuario;

	private ClasseUsuario(String classeUsuario) {
		this.classeUsuario = classeUsuario;
	}

	public String getClasseUsuario() {
		return classeUsuario;
	}

	public void setClasseUsuario(String classeUsuario) {
		this.classeUsuario = classeUsuario;
	}

}
