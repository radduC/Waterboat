package com.bookings.controllers;


import com.bookings.models.Booking;
import com.bookings.models.BookingResponse;
import com.bookings.repositories.BookingRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookingController {
//    private final BookingService bookingService;
//    public BookingController(BookingService bookingService) {
//        this.bookingService = bookingService;
//    }

//    private final BookingProxy bookingProxy;
//    public BookingController(BookingProxy bookingProxy) {
//        this.bookingProxy = bookingProxy;
//    }

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getBookings() {
//        return bookingProxy.getBookings();
//        var bookings = bookingService.getBookings();
        var bookings = bookingRepository.getBookings();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(bookings);

    }

    @PostMapping("/booking")
    public ResponseEntity<BookingResponse> addBooking(@RequestBody Booking booking) throws ParseException {
//        return bookingProxy.addBooking(booking);
//        boolean isOk = bookingService.addBooking(booking.toString());

        bookingRepository.recordBooking(booking);
        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setSuccess(true);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(bookingResponse);
    }
}
