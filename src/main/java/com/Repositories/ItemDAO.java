package com.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Item;

@Repository
public interface ItemDAO extends MongoRepository<Item, ObjectId> {
	
	Item findItemBy_id(ObjectId id);
}
