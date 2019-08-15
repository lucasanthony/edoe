package com.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Models.Item;

@Repository
public interface ItemDAO extends MongoRepository<Item, String> {
}
