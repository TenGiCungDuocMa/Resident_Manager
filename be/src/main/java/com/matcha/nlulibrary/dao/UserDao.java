package com.matcha.nlulibrary.dao;

import com.matcha.nlulibrary.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<UserEntity, String> {
    Optional<UserEntity> findById(String id);

}
