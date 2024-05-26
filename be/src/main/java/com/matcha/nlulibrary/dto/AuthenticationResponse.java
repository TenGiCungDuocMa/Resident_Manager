package com.matcha.nlulibrary.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.matcha.nlulibrary.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    @JsonProperty("data")
    private UserEntity user;
    private String token;
}
