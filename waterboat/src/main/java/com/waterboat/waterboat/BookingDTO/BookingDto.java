package com.waterboat.waterboat.BookingDTO;

public class BookingDto {
    private String fullName;
    private String dateFrom;
    private String dateTo;
    private String phone;

    public BookingDto() {
        
    }

    public BookingDto(String fullName, String dateFrom, String dateTo, String phone) {
        this.fullName = fullName;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.phone = phone;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
    }

    public String getDateTo() {
        return dateTo;
    }

    public void setDateTo(String dateTo) {
        this.dateTo = dateTo;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
