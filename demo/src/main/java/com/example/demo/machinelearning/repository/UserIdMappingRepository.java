package com.example.demo.machinelearning.repository;

import com.example.demo.machinelearning.model.UserIdMapping;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserIdMappingRepository extends MongoRepository<UserIdMapping, String> {
    @Query("{'userIdString': ?0}")
    List<UserIdMapping> findAllByUserIdString(String userIdString);

    @Query("{'userId': ?0}")
    List<UserIdMapping> findAllByUserId(Long userId);
}
