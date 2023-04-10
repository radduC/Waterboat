package com.waterboat.waterboat.controller;

import java.util.ArrayList;

import com.waterboat.waterboat.BookingDTO.BookingDto;
import com.waterboat.waterboat.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bookings")
public class BookingsController {
    @Autowired
    private BookingService bookingService;

    @GetMapping
    public ArrayList<BookingDto> getBookings() {
        return bookingService.getBookings("src\\main\\resources\\static\\data.txt");
    }
}
