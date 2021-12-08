package com.example.demo.machinelearning.service;

import com.example.demo.machinelearning.model.RecommendationModel;
import com.example.demo.machinelearning.model.UserRecommenderDataModel;
import com.mongodb.client.MongoDatabase;
import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.impl.neighborhood.NearestNUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.LogLikelihoodSimilarity;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.Recommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.UnknownHostException;
import java.util.List;

@Service
public class UserRecommenderService {

    public static final Logger LOGGER = LoggerFactory.getLogger(UserRecommenderService.class);

    @Autowired
    MongoDatabase mongoDatabase;

    @Value("${recommender.maxItemRecommendationListSize}")
    private int maxItemRecommendationListSize;
    @Value("${recommender.maxUserNeighborLimit}")
    private int maxUserNeighborLimit;

    public RecommendationModel recommendItem(Long userId) throws UnknownHostException, TasteException {
        UserRecommenderDataModel dataModel = new UserRecommenderDataModel(mongoDatabase);
        UserSimilarity userSim = new LogLikelihoodSimilarity(dataModel);
        UserNeighborhood neighborhood = new NearestNUserNeighborhood(maxUserNeighborLimit, userSim, dataModel);
        Recommender recommender = new GenericUserBasedRecommender(dataModel, neighborhood, userSim);
        List<RecommendedItem> recommendations = recommender.recommend(userId, maxItemRecommendationListSize);
        LOGGER.debug("recommendations ==== " + recommendations.size());
        for (RecommendedItem recommendation : recommendations) {
            LOGGER.debug("You may like movie " + recommendation.getItemID());
        }
        LOGGER.debug("neighbour ==== " + neighborhood.getUserNeighborhood(userId).length);
        RecommendationModel model = new RecommendationModel(neighborhood.getUserNeighborhood(userId),
                recommendations);

        return model;

    }


}
