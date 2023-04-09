package com.bookings.services;

import com.bookings.models.Booking;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class BookingService {
    private final String bookingData = "src/main/resources/data.txt";

    public List<Booking> getBookings() throws FileNotFoundException {
        List<Booking> bookings = new ArrayList<>();

        try (Scanner scanner = new Scanner(new BufferedReader(new FileReader(bookingData)))) {
            while (scanner.hasNext()) {
                String line = scanner.nextLine();
                String[] data = line.split(", ");
                Booking booking = new Booking();

                booking.setFullName(data[0]);
                booking.setDateFrom(data[1]);
                booking.setDateTo(data[2]);
                booking.setPhone(data[3]);
                bookings.add(booking);
            }
        }

        return bookings;
    }

    public boolean addBooking(String line) throws IOException {

        try (BufferedWriter outputBuffer = new BufferedWriter(new FileWriter(bookingData, true))) {
            outputBuffer.append(line);
            outputBuffer.newLine();
        }

        return true;
    }
}