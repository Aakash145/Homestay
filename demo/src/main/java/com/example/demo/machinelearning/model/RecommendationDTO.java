package com.example.demo.machinelearning.model;

import com.example.demo.dto.Unit;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationDTO {
    List<String> neighbours;
    List<Unit> recommendedItems;
}
