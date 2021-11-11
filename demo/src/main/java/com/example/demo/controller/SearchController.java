package com.example.demo.controller;

import com.example.demo.dto.SearchRequest;
import com.example.demo.model.Unit;
import com.example.demo.model.User;
import com.example.demo.repository.SearchRepository;
import com.example.demo.repository.UnitRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class SearchController {

    @Autowired
    SearchRepository searchRepository;

    @PostMapping(value = "/search")
    public List<Unit> search(@RequestBody SearchRequest searchRequest) {

        return searchRepository.getUnits(searchRequest);


    }

}
