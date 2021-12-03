package com.example.demo.machinelearning.controller;

import com.example.demo.machinelearning.service.UserRecommenderService;
import org.apache.mahout.cf.taste.common.TasteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.net.UnknownHostException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserUnitRecommenderController {


    @Autowired
    UserRecommenderService userRecommenderService;


    @GetMapping("/user/recommendation/{userId}")
    public Map<String, Object> recommendUnits(@PathVariable Long userId) {
        try {
            return userRecommenderService.recommendItem(userId);
        } catch (UnknownHostException | TasteException e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }

    }

}
