package com.Full.Stack.FullStack_backend.repository;

import com.Full.Stack.FullStack_backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User , Long> {

    @Override
    Optional<User> findById(Long id);
}
