package com.example.demo.repository;

import com.example.demo.model.Unit;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UnitRepository extends MongoRepository<Unit, String> {

}
