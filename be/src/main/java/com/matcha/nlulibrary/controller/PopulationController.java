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
//đây là lớp PopulationController trong sequence
// của chức năng tóm tắt thông tin ở trang chủ
public class PopulationController {
    @Autowired
    private PopulationService populationService;

    @GetMapping("/years")
    // phương thức này sẽ trả về danh sách các năm bằng cách
    // thực hiện phương thức getAllYears trong lớp PopulationService
    public List<Integer> getAllYears() {
        return populationService.getAllYears();
    }

    @GetMapping("/numbers")
    // phương thức này sẽ trả về danh sách số dân bằng cách
    // thực hiện phương thức getAllPopulations trong lớp PopulationService
    //phương thức này để lấy ra số dân tương ứng với mỗi năm trong csdl
    public List<Long> getAllPopulations() {
        return populationService.getAllPopulations();
    }
}
