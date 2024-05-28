package com.matcha.nlulibrary.service;

import com.matcha.nlulibrary.entity.PopulationEntity;
import com.matcha.nlulibrary.dao.PopulationDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PopulationService {
    @Autowired
    private PopulationDAO populationDAO;

    public List<Integer> getAllYears() {
        return populationDAO.findAll().stream()
                .map(PopulationEntity::getYear)
                .collect(Collectors.toList());
    }

    public List<Long> getAllPopulations() {
        return populationDAO.findAll().stream()
                .map(PopulationEntity::getPopulation)
                .collect(Collectors.toList());
    }
}
