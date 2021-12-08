package com.example.demo.mapper;

import com.example.demo.model.Unit;

public class UnitToUnitDTO {

    public static void map(Unit unit, com.example.demo.dto.Unit unitDTO){
        unitDTO.setId(unit.getId().toString());
        unitDTO.setAddress(unit.getAddress());
        unitDTO.setCity(unit.getCity());
        unitDTO.setImages(unit.getImages());
        unitDTO.setCountry(unit.getCountry());
        unitDTO.setTitle(unit.getTitle());
        unitDTO.setUsername(unit.getUsername());
        unitDTO.setPostalCode(unit.getPostalCode());

    }
}
