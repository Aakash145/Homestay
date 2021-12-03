package com.example.demo.machinelearning.model;

/**
 * This class contain source code from MongoDataModel class. Since MongoDataModel Class is Final. The Source code has been used.
 * The code build method was modified to meet the end requirement.
 */

import com.example.demo.common.Constants;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.apache.mahout.cf.taste.common.Refreshable;
import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.impl.common.FastByIDMap;
import org.apache.mahout.cf.taste.impl.common.FastIDSet;
import org.apache.mahout.cf.taste.impl.common.LongPrimitiveIterator;
import org.apache.mahout.cf.taste.impl.model.GenericDataModel;
import org.apache.mahout.cf.taste.impl.model.GenericPreference;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.model.Preference;
import org.apache.mahout.cf.taste.model.PreferenceArray;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.MongoOperations;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;


public class UserRecommenderDataModel implements DataModel {


    private static final long serialVersionUID = -5850904872484413637L;

    private static final Logger log = LoggerFactory.getLogger(UserRecommenderDataModel.class);

    private MongoDatabase mongoOp;


    private DataModel delegate;

    public UserRecommenderDataModel(MongoDatabase mongoOps) throws UnknownHostException {
        this.mongoOp = mongoOps;
        buildModel();
    }

    public void refreshDataModel() {
        try {
            this.buildModel();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }

    private void buildModel() throws UnknownHostException {
        FastByIDMap<Collection<Preference>> userIDPrefMap = new FastByIDMap<>();
        if (mongoOp != null) {
            MongoCollection<Document> collection = mongoOp.getCollection(Constants.MONGO_RECOMMENDATION_DATA_COLLECTION);
            List<RecommendationData> recommendationDataList = collection.find(RecommendationData.class).into(new ArrayList<>());
            recommendationDataList.forEach(recommendationData -> {
                long userId = recommendationData.getUserId();
                long unitId = recommendationData.getUnitId();
                float price = recommendationData.getPrice();
                Collection<Preference> userPrefs = userIDPrefMap.get(userId);
                if (userPrefs == null) {
                    userPrefs = new ArrayList<>(2);
                    userIDPrefMap.put(userId, userPrefs);
                }
                userPrefs.add(new GenericPreference(userId, unitId, (float) price));
            });
        }
        delegate = new GenericDataModel(GenericDataModel.toDataMap(userIDPrefMap, true));
    }

    @Override
    public LongPrimitiveIterator getUserIDs() throws TasteException {
        return delegate.getUserIDs();
    }

    @Override
    public PreferenceArray getPreferencesFromUser(long l) throws TasteException {
        return delegate.getPreferencesFromUser(l);
    }

    @Override
    public FastIDSet getItemIDsFromUser(long userId) throws TasteException {
        return delegate.getItemIDsFromUser(userId);
    }

    @Override
    public LongPrimitiveIterator getItemIDs() throws TasteException {
        return delegate.getItemIDs();
    }

    @Override
    public PreferenceArray getPreferencesForItem(long unitId) throws TasteException {
        return delegate.getPreferencesForItem(unitId);
    }

    @Override
    public Float getPreferenceValue(long userId, long unitId) throws TasteException {
        return delegate.getPreferenceValue(userId, unitId);
    }

    @Override
    public Long getPreferenceTime(long userId, long unitId) throws TasteException {
        return delegate.getPreferenceTime(userId, unitId);
    }

    @Override
    public int getNumItems() throws TasteException {
        return delegate.getNumItems();
    }

    @Override
    public int getNumUsers() throws TasteException {
        return delegate.getNumUsers();
    }

    @Override
    public int getNumUsersWithPreferenceFor(long unitId) throws TasteException {
        return delegate.getNumUsersWithPreferenceFor(unitId);
    }

    @Override
    public int getNumUsersWithPreferenceFor(long unitId1, long unitId2) throws TasteException {
        return delegate.getNumUsersWithPreferenceFor(unitId1, unitId2);
    }


    @Override
    public void setPreference(long userId, long unitId, float price) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void removePreference(long userId, long unitId) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean hasPreferenceValues() {
        return delegate.hasPreferenceValues();
    }

    @Override
    public float getMaxPreference() {
        return delegate.getMaxPreference();
    }

    @Override
    public float getMinPreference() {
        return delegate.getMinPreference();
    }

    @Override
    public void refresh(Collection<Refreshable> collection) {

    }
}