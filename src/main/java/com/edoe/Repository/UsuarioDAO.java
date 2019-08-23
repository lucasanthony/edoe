package com.edoe.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edoe.Model.Usuario;

@Repository
public interface UsuarioDAO extends MongoRepository<Usuario, String> {
	
	Usuario findUsuarioById(String id);
}

