package com.bookings.services;

import com.bookings.models.Booking;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class BookingService {
    private final String bookingData = "data.txt";
    private final List<Booking> bookings = new ArrayList<>();

    public List<Booking> getBookings() {
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

        } catch (Exception e) {
            e.printStackTrace();
        }

        return bookings;
    }

    public boolean addBooking(String line) {
        boolean success = false;

        try (BufferedWriter outputBuffer = new BufferedWriter(new FileWriter(bookingData, true))) {
            outputBuffer.append(line);
            outputBuffer.newLine();
            success = true;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return success;
    }
}