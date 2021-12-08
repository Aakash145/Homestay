package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Unit {
    private String id;
    private String title;
    public String username;
    private String address;
    private String country;
    private String city;
    private String postalCode;
    private List<Binary> images;
}
