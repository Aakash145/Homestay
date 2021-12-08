package com.example.demo.machinelearning.model;

import com.example.demo.common.Constants;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = Constants.MONGO_UNIT_ID_COLLECTION)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UnitIdMapping {
    private long unitId;
    private String unitIdString;
}
