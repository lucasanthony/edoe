package com.edoe.Model;

public enum ClasseUsuario {
	PESSOA_FISICA("PESSOA_FISICA"), IGREJA("IGREJA"), ORGAO_PUBLICO_MUNICIPAL("ORGAO_PUBLICO_MUNICIPAL"),
	ORGAO_PUBLICO_ESTADUAL("ORGAO_PUBLICO_ESTADUAL"), ORGAO_PUBLICO_FEDERAL("ORGAO_PUBLICO_FEDERAL"), ONG("ONG"),
	ASSOCIACAO("ASSOCIACAO"), SOCIEDADE("SOCIEDADE");

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
