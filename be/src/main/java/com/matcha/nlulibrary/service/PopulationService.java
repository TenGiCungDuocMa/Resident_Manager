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
//đây là lớp PopulationService trong sequence
// của chức năng tóm tắt thông tin ở trang chủ
public class PopulationService {
    @Autowired
    private PopulationDAO populationDAO;

    /**
     * populationDAO.findAll(): Gọi phương thức findAll() của PopulationDAO,
     * trả về danh sách tất cả các đối tượng PopulationEntity từ cơ sở dữ liệu.
     * .stream(): Chuyển đổi danh sách này thành một stream để dễ dàng xử lý.
     * .map(PopulationEntity::getYear): Sử dụng phương thức getYear của PopulationEntity
     * để lấy giá trị năm của từng đối tượng trong stream.
     * .collect(Collectors.toList()): Thu thập tất cả các giá trị năm và
     * chuyển chúng thành một danh sách (List<Integer>).
     * @return List<Integer>
     */
    public List<Integer> getAllYears() {
        return populationDAO.findAll().stream()
                .map(PopulationEntity::getYear)
                .collect(Collectors.toList());
    }

    /**
     * populationDAO.findAll(): Gọi phương thức findAll() của PopulationDAO,
     * trả về danh sách tất cả các đối tượng PopulationEntity từ cơ sở dữ liệu.
     * .stream(): Chuyển đổi danh sách này thành một stream để dễ dàng xử lý.
     * .map(PopulationEntity::getPopulation): Sử dụng phương thức getPopulation
     * của PopulationEntity để lấy giá trị dân số của từng đối tượng trong stream.
     * .collect(Collectors.toList()): Thu thập tất cả các giá trị dân số
     * và chuyển chúng thành một danh sách (List<Long>).
     * @return List<Long>
     */
    public List<Long> getAllPopulations() {
        return populationDAO.findAll().stream()
                .map(PopulationEntity::getPopulation)
                .collect(Collectors.toList());
    }
}
