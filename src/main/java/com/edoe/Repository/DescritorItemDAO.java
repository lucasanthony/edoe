package com.edoe.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edoe.Model.DescritorItem;

@Repository
public interface DescritorItemDAO extends MongoRepository<DescritorItem, String> {

}
