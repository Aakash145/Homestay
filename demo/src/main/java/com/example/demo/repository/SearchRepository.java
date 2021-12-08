package com.example.demo.repository;

import com.example.demo.common.Constants;
import com.example.demo.common.SearchOperation;
import com.example.demo.dto.SearchRequest;
import com.example.demo.model.Unit;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Component
public class SearchRepository {

    @Autowired
    private MongoDatabase mongoDatabase;

    public List<Unit> getUnits(SearchRequest searchRequest) {
        List<Bson> bsonList = new ArrayList<>();
        if (StringUtils.hasLength(searchRequest.getAddress())) {
            bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_UNIT_ADDRESS, searchRequest.getAddress())));
        }
        if (StringUtils.hasLength(searchRequest.getCity())) {
            bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_UNIT_CITY, searchRequest.getCity())));
        }
        if (StringUtils.hasLength(searchRequest.getPostalCode())) {
            bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_UNIT_POSTAL_CODE, searchRequest.getPostalCode())));
        }
        if (StringUtils.hasLength(searchRequest.getCountry())) {
            bsonList.add(Aggregates.match(Filters.eq(Constants.MONGO_UNIT_COUNTRY, searchRequest.getCountry())));
        }

        MongoCollection<Document> mongoCollection = mongoDatabase.getCollection(Constants.DB_UNIT_COLLECTION);

        List<Unit> unitList = mongoCollection.aggregate(bsonList, Unit.class).into(new ArrayList<>());

        return unitList;
    }

    private void getMongoOperations(SearchOperation searchOperation, String value) {
        String mongoSearchPattern = null;
        switch (searchOperation) {
            case CONTAINS:
                mongoSearchPattern = value;
                break;
            case ENDS:
                mongoSearchPattern = value + "$";
                break;
            case STARTS:
                mongoSearchPattern = "^" + value;
                break;
            case EXACT_MATCH:
                mongoSearchPattern = "^" + value + "$";
                break;

        }

    }

}
