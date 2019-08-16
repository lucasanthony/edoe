package com.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Usuario;

@Repository
public interface UsuarioDAO extends MongoRepository<Usuario, String> {
}
