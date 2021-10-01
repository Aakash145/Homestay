package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable String id){
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/user")
    public User postUser(@RequestBody User user){
        //encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        //as of now using email as username
        user.username = user.getEmail();
        return userRepository.save(user);
    }

}
