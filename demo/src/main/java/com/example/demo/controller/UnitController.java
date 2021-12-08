package com.example.demo.controller;

import com.example.demo.machinelearning.service.RecommendationDataService;
import com.example.demo.mapper.UnitToUnitDTO;
import com.example.demo.model.Unit;
import com.example.demo.repository.UnitRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UnitController {

    @Autowired
    UnitRepository unitRepository;

    @Autowired
    private RecommendationDataService recommendationDataService;

    @GetMapping("/units")
    public List<com.example.demo.dto.Unit> getUnits(){
        List<Unit> unitList = unitRepository.findAll();
        List<com.example.demo.dto.Unit> unitListDTO = new ArrayList<>();
        unitList.forEach(unit->{
            com.example.demo.dto.Unit unitDTO = new com.example.demo.dto.Unit();
            UnitToUnitDTO.map(unit, unitDTO);
            unitListDTO.add(unitDTO);
        });
        return unitListDTO;
    }

    @GetMapping("/ownerunits")
    public List<com.example.demo.dto.Unit> getUnitsByUsername(@RequestParam String username){
        List<Unit> unitList = unitRepository.findAllByUsername(username);
        List<com.example.demo.dto.Unit> unitListDTO = new ArrayList<>();
        unitList.forEach(unit->{
            com.example.demo.dto.Unit unitDTO = new com.example.demo.dto.Unit();
            UnitToUnitDTO.map(unit, unitDTO);
            unitListDTO.add(unitDTO);
        });
        return unitListDTO;
    }

    @GetMapping("/unit")
    public com.example.demo.dto.Unit getUnitByID(@RequestParam String ID){
        com.example.demo.dto.Unit unitDTO = null;
        Optional<Unit> unitOptional = unitRepository.findById(ID);
        if(unitOptional.isPresent()) {
            Unit unit = unitOptional.get();
            // user have searched for unit, refresh recommendation data.
            recommendationDataService.refreshRecommendationData(unit);
            unitDTO = new com.example.demo.dto.Unit();
            UnitToUnitDTO.map(unit,unitDTO);
        }
        return unitDTO;
    }


    @PostMapping(value = "/units/add")
    public Unit postUnit(@RequestParam("title") String title,
                         @RequestParam("username") String username,
                         @RequestParam("image") MultipartFile image[],
                         @RequestParam("address") String address,
                         @RequestParam("city") String city,
                         @RequestParam("country") String country,
                         @RequestParam("postalCode") String postalCode
                           ) throws IOException {
        Unit unit = new Unit();
        if(image!=null && image.length>0) {
            unit.setImages(new ArrayList<>());
            for(MultipartFile image1 : image){
                Binary binaryImage = new Binary(BsonBinarySubType.BINARY, image1.getBytes());
                unit.getImages().add(binaryImage);
            }
        }
        unit.setUsername(username);
        unit.setTitle(title);
        unit.setAddress(address);
        unit.setCity(city);
        unit.setCountry(country);
        unit.setPostalCode(postalCode);

        return unitRepository.save(unit);
    }
}
