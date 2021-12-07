package com.example.demo.machinelearning.controller;

import com.example.demo.controller.UnitController;
import com.example.demo.machinelearning.model.RecommendationDTO;
import com.example.demo.machinelearning.model.RecommendationModel;
import com.example.demo.machinelearning.model.UnitIdMapping;
import com.example.demo.machinelearning.model.UserIdMapping;
import com.example.demo.machinelearning.repository.UnitIdMappingRepository;
import com.example.demo.machinelearning.repository.UserIdMappingRepository;
import com.example.demo.machinelearning.service.UserRecommenderService;
import org.apache.avro.generic.GenericData;
import org.apache.mahout.cf.taste.common.TasteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserUnitRecommenderController {


    @Autowired
    UserRecommenderService userRecommenderService;

    @Autowired
    UnitIdMappingRepository unitIdMappingRepository;

    @Autowired
    UserIdMappingRepository userIdMappingRepository;

    @Autowired
    UnitController unitController;

    @GetMapping("/user/recommendation/{userIdStr}")
    public RecommendationDTO recommendUnits(@PathVariable String userIdStr) {
        try {
            RecommendationDTO recommendationDTO = new RecommendationDTO();
            List<UserIdMapping> userIdMappingList = userIdMappingRepository.findAllByUserIdString(userIdStr);
            if (!CollectionUtils.isEmpty(userIdMappingList)) {
                recommendationDTO.setRecommendedItems(new ArrayList<>());
                recommendationDTO.setNeighbours(new ArrayList<>());
                long userId = userIdMappingList.get(0).getUserId();
                RecommendationModel model = userRecommenderService.recommendItem(userId);
                if(model.getNeighbours()!=null && model.getNeighbours().length>0) {
                    Arrays.stream(model.getNeighbours()).forEach(neighbour->{
                        List<UserIdMapping> neighbours = userIdMappingRepository.findAllByUserId(neighbour);
                        neighbours.forEach(neighbourUserIdMapping->{
                            recommendationDTO.getNeighbours().add(neighbourUserIdMapping.getUserIdString());
                        });
                    });
                }
                model.getRecommendedItems().forEach(recommendedItem -> {
                    List<UnitIdMapping> unitIdMappingList =
                            unitIdMappingRepository.findAllByUnitId(recommendedItem.getItemID());
                    unitIdMappingList.forEach(unitIdMapping -> {
                        recommendationDTO.getRecommendedItems().add(
                                unitController.getUnitByID(unitIdMapping.getUnitIdString()));

                    });

                });
            }
            return recommendationDTO;
        } catch (UnknownHostException | TasteException e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }

    }

}
