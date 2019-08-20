package com.edoe.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edoe.Model.Usuario;

@Repository
public interface UsuarioDAO extends MongoRepository<Usuario, ObjectId> {
	
	Usuario findUsuarioById(ObjectId id);
}

