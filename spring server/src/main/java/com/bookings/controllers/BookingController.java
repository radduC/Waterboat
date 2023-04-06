package com.bookings.controllers;


import com.bookings.models.Booking;
import com.bookings.models.BookingResponse;
import com.bookings.services.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getBookings() {
        var bookings = bookingService.getBookings();
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }

    @PostMapping("/booking")
    public ResponseEntity<BookingResponse> addBooking(@RequestBody Booking booking) {
        boolean isOk = bookingService.addBooking(booking.toString());
        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setSuccess(isOk);
        return ResponseEntity.status(HttpStatus.OK).body(bookingResponse);
    }
}
