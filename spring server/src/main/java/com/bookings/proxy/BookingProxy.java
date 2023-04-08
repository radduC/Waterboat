package com.bookings.proxy;


import com.bookings.models.Booking;
import com.bookings.models.BookingResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "bookings", url = "${bookings.url}")
public interface BookingProxy {
    @GetMapping("/booking")
    List<Booking> getBookings();

    @PostMapping("/booking")
    BookingResponse addBooking(@RequestBody Booking booking);
}
