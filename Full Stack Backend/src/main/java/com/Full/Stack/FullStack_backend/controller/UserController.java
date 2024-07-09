package com.Full.Stack.FullStack_backend.controller;

import com.Full.Stack.FullStack_backend.model.User;
import com.Full.Stack.FullStack_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://locathost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/user")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
