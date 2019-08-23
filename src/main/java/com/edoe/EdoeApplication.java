package com.edoe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import easyaccept.EasyAccept;


@SpringBootApplication
public class EdoeApplication {

	public static void main(String[] args) {
		// DESCOMENTA AQUI PRA RODAR OS TESTES DE ACEITAÇÃO
		args = new String[] { "com.edoe.Service.UsuarioService", "Acceptance_test/use_case_1.txt"};
		EasyAccept.main(args);

		SpringApplication.run(EdoeApplication.class, args);
	}

}
