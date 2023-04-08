CREATE TABLE IF NOT EXISTS bookings
(
    booking_id SERIAL PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    dateFrom DATE NOT NULL,
    dateTo DATE NOT NULL,
    phone VARCHAR(255) NOT NULL
)