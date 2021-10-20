package com.example.demo.repository;

import com.example.demo.model.Unit;
import com.example.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UnitRepository extends MongoRepository<Unit, String> {

    @Query("{'username': ?0}")
    List<Unit> findAllByUsername(String username);

}
