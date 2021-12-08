package com.example.demo.machinelearning.repository;

import com.example.demo.common.Constants;
import com.example.demo.machinelearning.model.RecommendationData;
import com.example.demo.machinelearning.model.UnitIdMapping;
import com.example.demo.machinelearning.model.UserIdMapping;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Component
public class RecommendationDataCustomRepository {

    @Autowired
    private MongoDatabase mongoDatabase;

    public Long getNextUserId() {

        List<UserIdMapping> userIdMappingList = mongoDatabase.getCollection(Constants.MONGO_USER_ID_COLLECTION).
                find(UserIdMapping.class).sort(Sorts.descending(Constants.MONGO_USER_ID))
                .limit(1).into(new ArrayList<UserIdMapping>());
        if (CollectionUtils.isEmpty(userIdMappingList)) {
            return 1L;
        } else {
            UserIdMapping userIdMapping = userIdMappingList.get(0);
            return userIdMapping.getUserId() + 1;
        }
    }

    public Long getNextUnitId() {
        List<UnitIdMapping> unitIdMappingList = mongoDatabase.getCollection(Constants.MONGO_UNIT_ID_COLLECTION).
                find(UnitIdMapping.class).sort(Sorts.descending(Constants.MONGO_UNIT_ID))
                .limit(1).into(new ArrayList<UnitIdMapping>());
        if (CollectionUtils.isEmpty(unitIdMappingList)) {
            return 1L;
        } else {
            UnitIdMapping unitIdMapping = unitIdMappingList.get(0);
            return unitIdMapping.getUnitId() + 1;
        }
    }

    public boolean isUserUnitExists(Long userId, Long unitId) {
        List<Bson> bsonList = new ArrayList<>();
        bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_USER_ID, userId)));
        bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_UNIT_ID, unitId)));
        MongoCollection<Document> mongoCollection = mongoDatabase.getCollection(Constants.MONGO_RECOMMENDATION_DATA_COLLECTION);

        List<RecommendationData> unitList = mongoCollection.aggregate(bsonList, RecommendationData.class).into(new ArrayList<>());
        if (CollectionUtils.isEmpty(unitList)) {
            return false;
        }
        return true;
    }
}
