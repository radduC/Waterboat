package com.waterboat.waterboat.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Scanner;

import com.waterboat.waterboat.BookingDTO.BookingDto;

import org.springframework.stereotype.Service;

@Service
public class BookingService {
    public ArrayList<BookingDto> getBookings(String file) {
        ArrayList<BookingDto> bookings = new ArrayList<>();

        try (Scanner sc = new Scanner(new BufferedReader(new FileReader(file)))) {
            while (sc.hasNextLine()) {
                String[] line = sc.nextLine().split(",");
                String fullName = line[0];
                String dateFrom = line[1];
                String dateTo = line[2];
                String phone = line[3];

                BookingDto booking = new BookingDto(fullName, dateFrom, dateTo, phone);
                bookings.add(booking);
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return bookings;
    }
}
