package com.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Receptor;

@Repository
public interface ReceptorDAO extends MongoRepository<Receptor, String> {
}