package com.matcha.nlulibrary.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TemporaryResidenceRequest {
    private String city;
    private String district;
    private String ward;
    private String implementingAgency;
    private String phoneOfAgency;
    private String address;
    private String nameOfFullHousehold;
    private String relationshipHouseholder;
    private String identificationOfHouseholder;
    private String fullName;
    private String identification;
    private String gender;
    private String phone;
    private Date birthDate;
    private String email;
    private String placeOfResidence;
    private String currentAddress;
    private String recommendedContent;
    private String receiveNotification;
    private String receivingResults;
}
