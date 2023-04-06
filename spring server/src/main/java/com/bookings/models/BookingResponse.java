package com.bookings.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class BookingResponse {
    @Getter
    @Setter
    private boolean success;

    @Getter
    private Date time = new Date();
}
