package com.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.DescritorItem;

@Repository
public interface DescritorItemDAO extends MongoRepository<DescritorItem, String> {

}
