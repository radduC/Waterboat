package com.bookingservice.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class BookingResponse {
    @Getter
    @Setter
    private boolean success;

    @Getter
    private final Date time = new Date();
}
