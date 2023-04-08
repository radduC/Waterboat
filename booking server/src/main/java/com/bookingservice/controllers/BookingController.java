package com.bookingservice.controllers;

import com.bookingservice.models.Booking;
import com.bookingservice.models.BookingResponse;
import com.bookingservice.services.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getBookings() throws FileNotFoundException {
        var bookings = bookingService.getBookings();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(bookings);
    }

    @PostMapping("/booking")
    public ResponseEntity<BookingResponse> addBooking(@RequestBody Booking booking) throws IOException {
        boolean isOk = bookingService.addBooking(booking.toString());
        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setSuccess(isOk);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(bookingResponse);
    }
}
