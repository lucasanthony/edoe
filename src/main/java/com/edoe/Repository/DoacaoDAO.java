package com.edoe.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.edoe.Model.Doacao;

public interface DoacaoDAO extends MongoRepository<Doacao, String>{

}
