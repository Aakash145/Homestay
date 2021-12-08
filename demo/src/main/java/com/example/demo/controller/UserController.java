package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/user/updatePass")
    public User updateUser(@RequestParam("username") String userName,
                           @RequestParam("password") String newPassword){

        User user = userRepository.findByUsername(userName);
        user.setPassword(passwordEncoder.encode(newPassword));
        return userRepository.save(user);

    }


}
