package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppointmentController {

    @Autowired
    AppointmentRepository appointmentRepository;

    @GetMapping("/appointments")
    public List<Appointment> getAppointments(){
        return appointmentRepository.findAll();
    }

    @GetMapping("/appointment")
    public List<Appointment> getAppointmentsByEmail(@RequestParam String email){
        return appointmentRepository.findAllByEmail(email);
    }

    @PostMapping("/appointments")
    public Appointment postAppointment(@RequestBody Appointment appointment){
        return appointmentRepository.save(appointment);
    }
}
