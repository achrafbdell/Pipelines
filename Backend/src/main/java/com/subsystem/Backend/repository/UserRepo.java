package com.subsystem.Backend.repository;

import com.subsystem.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
