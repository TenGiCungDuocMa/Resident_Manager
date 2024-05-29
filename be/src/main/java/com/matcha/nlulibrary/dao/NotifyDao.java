package com.matcha.nlulibrary.dao;

import com.matcha.nlulibrary.entity.NotifyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotifyDao extends JpaRepository<NotifyEntity, String> {
    List<NotifyEntity> findAll();

    List<NotifyEntity> findNotifyEntityById(int id);
}
