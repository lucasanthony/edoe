package com.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Doador;

@Repository
public interface DoadorDAO extends MongoRepository<Doador, String> {
}
