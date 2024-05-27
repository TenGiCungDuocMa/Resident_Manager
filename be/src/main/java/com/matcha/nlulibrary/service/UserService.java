package com.matcha.nlulibrary.service;

import com.matcha.nlulibrary.dao.UserDao;
import com.matcha.nlulibrary.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDao userDao;

    public UserEntity getUserById(String id) {
        if (id == null) throw new IllegalArgumentException("Id cannot be empty");
        return userDao.findById(id).orElse(null);
    }

    public UserEntity updateUser(UserEntity user) {
        if (user == null) throw new IllegalArgumentException("User cannot be empty");
        return userDao.save(user);
    }

}
