package com.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Usuario;

@Repository
public interface UsuarioDAO extends MongoRepository<Usuario, ObjectId> {
	
	Usuario findUsuarioby_Id(ObjectId id);
}

