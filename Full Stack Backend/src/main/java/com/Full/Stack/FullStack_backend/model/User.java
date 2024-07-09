package com.Full.Stack.FullStack_backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private long id;
    private String userName;
    private String name;
    private String email;

}
