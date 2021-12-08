package com.example.demo.machinelearning.service;

import com.example.demo.common.UserThreadLocal;
import com.example.demo.machinelearning.model.RecommendationData;
import com.example.demo.machinelearning.model.UnitIdMapping;
import com.example.demo.machinelearning.model.UserIdMapping;
import com.example.demo.machinelearning.repository.RecommendationDataCustomRepository;
import com.example.demo.machinelearning.repository.RecommendationDataRepository;
import com.example.demo.machinelearning.repository.UnitIdMappingRepository;
import com.example.demo.machinelearning.repository.UserIdMappingRepository;
import com.example.demo.model.Unit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
public class RecommendationDataService {

    @Autowired
    private RecommendationDataCustomRepository recommendationDataCustomRepository;
    @Autowired
    private UserIdMappingRepository userIdMappingRepository;
    @Autowired
    private RecommendationDataRepository recommendationDataRepository;
    @Autowired
    private UnitIdMappingRepository unitIdMappingRepository;


    public void refreshRecommendationData(Unit unit) {
        //check if user already mapped.
        UserIdMapping userIdMapping = null;

        List<UserIdMapping> listOfUser = userIdMappingRepository.findAllByUserIdString(UserThreadLocal.getUserName());
        if (CollectionUtils.isEmpty(listOfUser)) {
            Long nextUserId = recommendationDataCustomRepository.getNextUserId();
            userIdMapping = new UserIdMapping(nextUserId, UserThreadLocal.getUserName());
            userIdMappingRepository.save(userIdMapping);
        } else {
            userIdMapping = listOfUser.get(0);
        }

        List<UnitIdMapping> listOfUnits = unitIdMappingRepository.findAllByUnitIdString(unit.getId().toString());

        UnitIdMapping unitIdMapping = null;
        if (CollectionUtils.isEmpty(listOfUnits)) {
            Long nextUnitId = recommendationDataCustomRepository.getNextUnitId();
            unitIdMapping = new UnitIdMapping(nextUnitId, unit.getId().toString());
            unitIdMappingRepository.save(unitIdMapping);
        } else {
            unitIdMapping = listOfUnits.get(0);
        }

        boolean userUnitExists = recommendationDataCustomRepository.
                isUserUnitExists(userIdMapping.getUserId(), unitIdMapping.getUnitId());

        if (!userUnitExists) {
            userIdMapping.setUserIdString(UserThreadLocal.getUserName());
            RecommendationData recommendationData = new RecommendationData();
            recommendationData.setUserId(userIdMapping.getUserId());
            recommendationData.setUnitId(unitIdMapping.getUnitId());
            // save the price in unit.
            recommendationData.setPrice(100);

            recommendationDataRepository.save(recommendationData);
        }

    }

}
