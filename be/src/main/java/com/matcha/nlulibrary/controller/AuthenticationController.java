package com.matcha.nlulibrary.controller;

import com.matcha.nlulibrary.dto.AuthenticationRequest;
import com.matcha.nlulibrary.request.RegisterRequest;
import com.matcha.nlulibrary.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;


    //    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(
//            @RequestBody RegisterRequest request
//    ){
//
//        return ResponseEntity.ok(authenticationService.register(request));
//    }
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody AuthenticationRequest request) {
        try {
            return ResponseEntity.ok(authenticationService.login(request));
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody RegisterRequest request) {
        Map<String, String> response = new HashMap<>();
        try {
            authenticationService.register(request);
            return ResponseEntity.created(null).body(Map.of("message", "User created"));
        } catch (EmptyResultDataAccessException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalArgumentException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/current")
    public ResponseEntity<Object> getCurrentUser(@RequestHeader("Authorization") String token) {
        System.out.println(token);
        return ResponseEntity.ok(authenticationService.getCurrentUser(token.substring(7)));
    }
}
