package com.example.demo.controller;

import com.example.demo.dto.SearchRequest;
import com.example.demo.mapper.UnitToUnitDTO;
import com.example.demo.model.Unit;
import com.example.demo.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchController {

    @Autowired
    SearchRepository searchRepository;

    @PostMapping(value = "/search")
    public List<com.example.demo.dto.Unit> search(@RequestBody SearchRequest searchRequest) {
        List<Unit> unitList = searchRepository.getUnits(searchRequest);
        List<com.example.demo.dto.Unit> unitListDTO = new ArrayList<>();
        unitList.forEach(unit -> {
            com.example.demo.dto.Unit unitDTO = new com.example.demo.dto.Unit();
            UnitToUnitDTO.map(unit, unitDTO);
            unitListDTO.add(unitDTO);
        });
        return unitListDTO;


    }

}
