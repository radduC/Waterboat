package com.bookings.models;

import lombok.Getter;
import lombok.Setter;

public class Booking {
    @Getter
    @Setter
    private String fullName;

    @Getter
    @Setter
    private String dateFrom;

    @Getter
    @Setter
    private String dateTo;

    @Getter
    @Setter
    private String phone;

    @Override
    public String toString() {
        return fullName + ", " + dateFrom + ", " + dateTo + ", " + phone;
    }
}
