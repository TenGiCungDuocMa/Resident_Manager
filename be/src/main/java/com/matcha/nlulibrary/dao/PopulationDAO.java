package com.matcha.nlulibrary.dao;

import com.matcha.nlulibrary.entity.PopulationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
//đây là lớp để tương tác với Database
public interface PopulationDAO extends JpaRepository<PopulationEntity, Integer> {
}
