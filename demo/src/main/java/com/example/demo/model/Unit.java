package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "unit")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Unit {

    @Id
    private String id;
    private String title;
    private String username;
    private String address;
    private String country;
    private String city;
    private String postalCode;
    private Binary images;
}
