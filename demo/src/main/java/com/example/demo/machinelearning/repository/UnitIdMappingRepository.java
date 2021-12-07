package com.example.demo.machinelearning.repository;

import com.example.demo.machinelearning.model.UnitIdMapping;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UnitIdMappingRepository extends MongoRepository<UnitIdMapping, String> {
    @Query("{'unitIdString': ?0}")
    List<UnitIdMapping> findAllByUnitIdString(String unitIdString);

    @Query("{'unitId': ?0}")
    List<UnitIdMapping> findAllByUnitId(Long unitId);
}
