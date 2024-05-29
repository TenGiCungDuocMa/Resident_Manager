package com.matcha.nlulibrary.service;

import com.matcha.nlulibrary.dao.TemporaryResidenceDao;
import com.matcha.nlulibrary.dto.TemporaryResidenceRequest;
import com.matcha.nlulibrary.entity.TemporaryResidenceEntity;
import com.matcha.nlulibrary.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class TemporaryResidenceService {
    private final TemporaryResidenceDao temporaryResidenceDao;

    /**
     * 8.1.Lưu dữ liệu vào database
     * @param request
     */
    public void createTemporaryResidence(TemporaryResidenceRequest request) {
        if (request == null) throw new IllegalArgumentException("Request cannot be empty");
        if (request.getBirthDate() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getCity() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getDistrict() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getWard() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getImplementingAgency() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getAddress() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getNameOfFullHousehold() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getIdentificationOfHouseholder() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getRelationshipHouseholder() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getFullName() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getIdentification() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getGender() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getPlaceOfResidence() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getCurrentAddress() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getRecommendedContent() == null) throw new IllegalArgumentException("Cannot be empty");
        if (request.getReceivingResults() == null) throw new IllegalArgumentException("Cannot be empty");

        TemporaryResidenceEntity temporaryResidence = TemporaryResidenceEntity.builder()
                .birthDate(request.getBirthDate())
                .city(request.getCity())
                .district(request.getDistrict())
                .ward(request.getWard())
                .implementingAgency(request.getImplementingAgency())
                .address(request.getAddress())
                .nameOfFullHousehold(request.getNameOfFullHousehold())
                .relationshipHouseholder(request.getRelationshipHouseholder())
                .identificationOfHouseholder(request.getIdentificationOfHouseholder())
                .fullName(request.getFullName())
                .identification(request.getIdentification())
                .gender(request.getGender())
                .placeOfResidence(request.getPlaceOfResidence())
                .currentAddress(request.getCurrentAddress())
                .recommendedContent(request.getRecommendedContent())
                .receivingResults(request.getReceivingResults())
                .phoneOfAgency(request.getPhoneOfAgency())
                .email(request.getEmail())
                .phone(request.getPhone())
                .receiveNotification(request.getReceiveNotification())
                .build();
        /**
         * 8.2 Luu thông tin vào database thông qua lớp DAO
         */
        temporaryResidenceDao.save(temporaryResidence);
    }

}
