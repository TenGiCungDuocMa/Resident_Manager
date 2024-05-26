package com.matcha.nlulibrary.exception;

import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ErrorMessage handleBadCredentialsException(BadCredentialsException exception){
        return ErrorMessage.builder().message(exception.getMessage()).statusCode(HttpStatus.UNAUTHORIZED.value()).build();
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ErrorMessage handleAccessDeniedExceptionException(AccessDeniedException exception){
        return ErrorMessage.builder().message("Access Denied").statusCode(HttpStatus.FORBIDDEN.value()).build();
    }

    @ExceptionHandler(SignatureException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ErrorMessage handleSignatureExceptionException(SignatureException exception){
        return ErrorMessage.builder().message("Could not decode token: Error while decoding to JSON: Control character error, possibly incorrectly encoded").statusCode(HttpStatus.UNAUTHORIZED.value()).build();
    }
    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ErrorMessage handleUsernameNotFoundExceptionException(UsernameNotFoundException exception){
        return ErrorMessage.builder().message(exception.getMessage()).statusCode(HttpStatus.UNAUTHORIZED.value()).build();
    }
    @ExceptionHandler(UserAlreadyExistsException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorMessage handleUserAlreadyExistsExceptionException(UserAlreadyExistsException exception){
        return ErrorMessage.builder().message(exception.getMessage()).statusCode(HttpStatus.CONFLICT.value()).build();
    }

    @ExceptionHandler(MalformedJwtException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleMalformedJwtException(MalformedJwtException exception){
        return ErrorMessage.builder().message(exception.getMessage()).statusCode(HttpStatus.BAD_REQUEST.value()).build();
    }


}
