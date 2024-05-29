package com.matcha.nlulibrary.dao;

import com.matcha.nlulibrary.entity.TemporaryResidenceEntity;
import com.matcha.nlulibrary.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TemporaryResidenceDao extends JpaRepository<TemporaryResidenceEntity, String> {
//    Optional<TemporaryResidenceEntity> createTemporaryResidence();

}
