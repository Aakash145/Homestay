package com.example.demo.machinelearning.model;

import com.example.demo.common.Constants;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = Constants.MONGO_RECOMMENDATION_DATA_COLLECTION)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationData {
    private long userId;
    private long unitId;
    private float price;
}
