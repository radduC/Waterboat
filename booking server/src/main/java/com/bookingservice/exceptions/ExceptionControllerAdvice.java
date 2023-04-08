package com.bookingservice.exceptions;

import com.bookingservice.models.ErrorDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.FileNotFoundException;
import java.io.IOException;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler({FileNotFoundException.class, IOException.class})
    public ResponseEntity<ErrorDetails> exceptionHandler() {
        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setSuccess(false);

        return ResponseEntity
                .badRequest()
                .body(errorDetails);
    }
}
