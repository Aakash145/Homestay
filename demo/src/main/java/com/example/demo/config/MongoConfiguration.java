package com.example.demo.config;

import com.example.demo.machinelearning.model.RecommendationData;
import com.example.demo.model.Appointment;
import com.example.demo.model.Unit;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.Conventions;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.CodecRegistryProvider;

@Configuration
public class MongoConfiguration {

    @Value("${mongo.uri}")
    private String mongoURL;

    @Bean
    public MongoClient mongoClient(){
        ConnectionString connectionString = new ConnectionString(mongoURL);
        return MongoClients.create(connectionString);
    }

    @Bean
    public MongoDatabase mongoDatabase(MongoClient mongoClient){
        ConnectionString  connectionString = new ConnectionString(mongoURL);
        MongoDatabase mongoDatabase = mongoClient.getDatabase(connectionString.getDatabase());
        CodecRegistry codecRegistry = CodecRegistries.fromRegistries(
                MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().register(
                        Unit.class,
                        RecommendationData.class)
                        .conventions(Conventions.DEFAULT_CONVENTIONS).automatic(true).build()));
        mongoDatabase = mongoDatabase.withCodecRegistry(codecRegistry);
        return mongoDatabase;
    }

}
