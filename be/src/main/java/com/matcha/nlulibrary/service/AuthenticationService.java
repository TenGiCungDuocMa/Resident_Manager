package com.matcha.nlulibrary.service;


import com.matcha.nlulibrary.auth.JwtTokenProvider;

import com.matcha.nlulibrary.dao.UserDao;
import com.matcha.nlulibrary.dto.AuthenticationRequest;
import com.matcha.nlulibrary.dto.AuthenticationResponse;
import com.matcha.nlulibrary.entity.UserEntity;
import com.matcha.nlulibrary.exception.UserAlreadyExistsException;
import com.matcha.nlulibrary.request.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserDao repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    public void register(RegisterRequest request) {
        if (request == null) throw new IllegalArgumentException("Request cannot be empty");
        if (request.getId() == null) throw new IllegalArgumentException("Id cannot be empty");
        if (request.getName() == null) throw new IllegalArgumentException("Name cannot be empty");

        if (userService.getUserById(request.getId()) != null) throw new EmptyResultDataAccessException("User " + request.getId() + " already exists", 1);
        UserEntity user = UserEntity.builder()
                .name(request.getName())
                .id(request.getId())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        repository.save(user);
    }


    public AuthenticationResponse login(@RequestBody AuthenticationRequest loginRequest) {
        UserEntity currentUser = userService.getUserById(loginRequest.getId());
        if (currentUser == null)
            throw new EmptyResultDataAccessException("User not found", 1);

        // Trả về jwt cho người dùng.
        if (passwordEncoder.matches(loginRequest.getPassword(), currentUser.getPassword())){
            String jwt = tokenProvider.generateToken(currentUser);
            return new AuthenticationResponse(currentUser, jwt);
        } else {
            throw new EmptyResultDataAccessException("Password is incorrect", 1);
        }
    }

    public UserEntity getCurrentUser(String jwt) {
        String idUser = tokenProvider.getIdFromJwt(jwt);
        UserEntity user = userService.getUserById(idUser);
        return user;
    }


}
