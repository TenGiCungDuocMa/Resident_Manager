package com.matcha.nlulibrary.controller;

import com.matcha.nlulibrary.service.PopulationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/population")
@RequiredArgsConstructor
public class PopulationController {
    @Autowired
    private PopulationService populationService;

    @GetMapping("/years")
    public List<Integer> getAllYears() {
        return populationService.getAllYears();
    }

    @GetMapping("/numbers")
    public List<Long> getAllPopulations() {
        return populationService.getAllPopulations();
    }
}
