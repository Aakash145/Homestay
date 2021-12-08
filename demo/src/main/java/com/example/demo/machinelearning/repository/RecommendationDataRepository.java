package com.example.demo.machinelearning.repository;

import com.example.demo.machinelearning.model.RecommendationData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecommendationDataRepository extends MongoRepository<RecommendationData, String> {

}
