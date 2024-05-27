package com.matcha.nlulibrary.service;

import com.matcha.nlulibrary.dao.NotifyDao;
import com.matcha.nlulibrary.entity.NotifyEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotifyService {
    private final NotifyDao notifyDao;

    public List<NotifyEntity> getAllNotifies() {
        return notifyDao.findAll();
    }

    public List<NotifyEntity> getNotifyDetail(int id) {
        return notifyDao.findNotifyEntityById(id);
    }
}
