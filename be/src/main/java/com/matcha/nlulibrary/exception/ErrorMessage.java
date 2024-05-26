package com.matcha.nlulibrary.exception;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class ErrorMessage {
    @JsonProperty("status_code")
    private int statusCode;
    private String message;
}
