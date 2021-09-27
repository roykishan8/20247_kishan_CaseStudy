package com.sonata.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sonata.model.Login;
import com.sonata.model.Task;
import com.sonata.model.User;
@Repository
public interface ProductRepository extends JpaRepository<Task,Long>{
	
	
}
