package com.edoe.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edoe.Model.Item;

@Repository
public interface ItemDAO extends MongoRepository<Item, ObjectId> {
	
	Item findItemById(ObjectId id);
}
