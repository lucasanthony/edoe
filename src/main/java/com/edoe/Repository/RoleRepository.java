package com.edoe.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.edoe.Model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String role);
}