package com.edoe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.RestController;

@EnableCaching
@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class EdoeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdoeApplication.class, args);

	}

}
