package com.example.demo.controller;

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

    @GetMapping("/units")
    public List<Unit> getUnits(){

        return unitRepository.findAll();
    }

    @GetMapping("/ownerunits")
    public List<Unit> getUnitsByUsername(@RequestParam String username){
        return unitRepository.findAllByUsername(username);
    }

    @GetMapping("/unit")
    public Optional<Unit> getUnitByID(@RequestParam String ID){
        return unitRepository.findById(ID);
    }


    @PostMapping(value = "/units/add")
    public Unit postUnit(@RequestParam("title") String title,
                         @RequestParam("username") String username,
                         @RequestParam("image") MultipartFile images[],
                         @RequestParam("address") String address,
                         @RequestParam("city") String city,
                         @RequestParam("country") String country,
                         @RequestParam("postalCode") String postalCode
                           ) throws IOException {
        Unit unit = new Unit();
        if(images!=null && images.length>0) {
            unit.setImages(new ArrayList<>());
            for(MultipartFile image : images){
                Binary binaryImage = new Binary(BsonBinarySubType.BINARY, image.getBytes());
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
