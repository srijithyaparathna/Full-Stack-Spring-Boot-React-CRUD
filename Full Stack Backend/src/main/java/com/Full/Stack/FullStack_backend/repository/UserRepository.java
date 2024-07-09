package com.Full.Stack.FullStack_backend.repository;

import com.Full.Stack.FullStack_backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {



}
