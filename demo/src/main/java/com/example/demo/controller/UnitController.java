package com.example.demo.controller;

import com.example.demo.model.Unit;
import com.example.demo.repository.UnitRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UnitController {

    @Autowired
    UnitRepository unitRepository;

    @GetMapping("/units")
    public List<Unit> getUnits(){
        return unitRepository.findAll();
    }


    @PostMapping("/units/add")
    public Unit postUnit(@RequestParam("title") String title,
                         @RequestParam("username") String username,
                         @RequestParam("multiFile") MultipartFile image,
                         @RequestParam("address") String address,
                         @RequestParam("city") String city,
                         @RequestParam("country") String country,
                         @RequestParam("postalCode") String postalCode
                           ) throws IOException {
        Unit unit = new Unit();
        unit.setImages(new Binary(BsonBinarySubType.BINARY, image.getBytes()));
        unit.setUsername(username);
        unit.setTitle(title);
        unit.setAddress(address);
        unit.setCity(city);
        unit.setCountry(country);
        unit.setPostalCode(postalCode);

        return unitRepository.insert(unit);
    }
}
