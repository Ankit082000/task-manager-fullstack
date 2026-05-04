package com.example.taskapp.controller;

import com.example.taskapp.model.User;
import com.example.taskapp.security.JwtUtil;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        if (user.getUsername().equals("admin") &&
                user.getPassword().equals("1234")) {

            return jwtUtil.generateToken(user.getUsername());
        }

        return "Invalid credentials";
    }
}