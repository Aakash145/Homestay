package com.example.demo.machinelearning.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationModel {
    long[] neighbours;
    List<RecommendedItem> recommendedItems;
}
