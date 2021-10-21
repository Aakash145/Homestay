package com.example.demo.controller;

import com.example.demo.dto.UserDetails;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public UserDetails postUser(@RequestBody User user){
        User userDB = userRepository.findByUsername(user.getUsername());
        UserDetails userDetails = new UserDetails(userDB.getUsername(), userDB.getRole());
        return userDetails;
    }

}
