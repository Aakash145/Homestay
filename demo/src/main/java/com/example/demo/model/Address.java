package com.example.demo.model;

public class Address {
    private String streetAddress;
    private String country;
    private String city;
    private String postCode;

    public Address() {
    }

    public Address(String streetAddress, String country, String city, String postCode) {
        this.streetAddress = streetAddress;
        this.country = country;
        this.city = city;
        this.postCode = postCode;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
}
