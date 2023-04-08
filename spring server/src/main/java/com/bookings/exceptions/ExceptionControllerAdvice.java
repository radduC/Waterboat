package com.bookings.exceptions;

import com.bookings.models.ErrorDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler({FileNotFoundException.class, IOException.class, SQLException.class, ParseException.class})
    public ResponseEntity<ErrorDetails> exceptionHandler() {
        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setSuccess(false);

        return ResponseEntity
                .badRequest()
                .body(errorDetails);
    }
}
