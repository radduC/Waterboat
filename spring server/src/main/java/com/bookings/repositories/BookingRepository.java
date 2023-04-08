package com.bookings.repositories;

import com.bookings.models.Booking;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@Repository
public class BookingRepository {
    private final JdbcTemplate jdbc;

    public BookingRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void recordBooking(Booking booking) throws ParseException {
        String sql = "INSERT INTO bookings VALUES(default, ?, ?, ?, ?)";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-mm-dd");

        jdbc.update(sql,
                booking.getFullName(),
                simpleDateFormat.parse(booking.getDateFrom()),
                simpleDateFormat.parse(booking.getDateTo()),
                booking.getPhone());
    }

    public List<Booking> getBookings() {
        String sql = "SELECT * FROM bookings";

        RowMapper<Booking> rowMapper = (r, i) -> {
            Booking booking = new Booking();
            booking.setFullName(r.getString("fullname"));
            booking.setDateFrom(String.valueOf(r.getDate("datefrom")));
            booking.setDateTo(String.valueOf(r.getDate("dateto")));
            booking.setPhone(r.getString("phone"));
            return booking;
        };

        return jdbc.query(sql, rowMapper);
    }
}
