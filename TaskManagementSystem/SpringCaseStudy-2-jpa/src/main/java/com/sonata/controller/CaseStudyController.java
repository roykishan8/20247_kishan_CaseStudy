package com.sonata.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Repository.LoginRepository;
import com.sonata.Repository.ProductRepository;
import com.sonata.Repository.UserRepository;

//import com.sonata.DAOimpl.CaseStudyImpl;

import com.sonata.model.Login;
import com.sonata.model.Task;

import com.sonata.model.User;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CaseStudyController {

Optional<Task> p1;
Optional<User> p2;
Optional<Login> p3;

	
	@Autowired
	private ProductRepository prepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LoginRepository loginRepository;
	@GetMapping("/task")
	public List<Task> getAllProducts()
	{
		return prepository.findAll();
	}
	@GetMapping(value= "/task/{id}")
	public ResponseEntity gettaskById(@PathVariable(value="id") Long taskId)
	{
		p1= prepository.findById(taskId);
		return ResponseEntity.ok().body(p1);
	}
	@PostMapping(value = "/task")
	public Task saveProduct(@RequestBody Task prod)
	{
		return prepository.save(prod);
	}
	@PutMapping(value="/task/{id}")
	public ResponseEntity updateTask(@PathVariable(value="id") Long pId, @Valid @RequestBody Task pdata) {
		p1 = prepository.findById(pId);
		Task p2 = p1.get();
		
		p2.setCreatedOn(pdata.getCreatedOn());
		p2.setDescription(pdata.getDescription());
		p2.setIsBookmarked(pdata.getIsBookmarked());
		p2.setName(pdata.getName());
		p2.setNotes(pdata.getNotes());
		p2.setOwnerId(pdata.getOwnerId());
		p2.setPriority(pdata.getPriority());
		p2.setStatus(pdata.getStatus());
		p2.setStatusChangedOn(pdata.getStatusChangedOn());
		p2.setTaskId(pdata.getTaskId());
		
		
		Task updateProduct = prepository.save(p2);
		return ResponseEntity.ok(updateProduct);
	}
	@DeleteMapping(value="/task/{id}")
	public ResponseEntity deleteTask(@PathVariable(value="id")Long pId) {
		prepository.deleteById(pId);
		return ResponseEntity.noContent().build();
	}
	@GetMapping("/user")
	public List<User> getAlluser()
	{
		return userRepository.findAll();
	}
	@GetMapping(value= "/user/{id}")
	public ResponseEntity getuserById(@PathVariable(value="id") Long userId)
	{
		p2= userRepository.findById(userId);
		return ResponseEntity.ok().body(p2);
	}
	@PostMapping(value = "/user")
	public User saveProduct(@RequestBody User prod)
	{
		return userRepository.save(prod);
	}
	
	@PutMapping(value="/user/{id}")
	public ResponseEntity updateUser(@PathVariable(value="id") Long pId, @Valid @RequestBody User pdata) {
		p2 = userRepository.findById(pId);
		User p3 = p2.get();
		
		p3.setActive(pdata.getisActive());
		p3.setContactNumber(pdata.getContactNumber());
		p3.setCreate_On(pdata.getCreate_On());
		p3.setDOB(pdata.getDOB());
		p3.setEmail(pdata.getEmail());
		p3.setRole(pdata.getRole());
		p3.setUserId(pdata.getUserId());
		p3.setUsername(pdata.getUsername());
		

		User updateProduct = userRepository.save(p3);
		return ResponseEntity.ok(updateProduct);
		
	}
	@DeleteMapping(value="/user/{id}")
	public ResponseEntity deleteUser(@PathVariable(value="id")Long pId) {
		userRepository.deleteById(pId);
		return ResponseEntity.noContent().build();
	}
	@GetMapping("/login")
	public List<Login> getAlllogin()
	{
		return loginRepository.findAll();
	}
	@GetMapping(value= "/login/{id}")
	public ResponseEntity getloginById(@PathVariable(value="id") Long loginId)
	{
		p3= loginRepository.findById(loginId);
		return ResponseEntity.ok().body(p3);
	}
	@PostMapping(value = "/login")
	public Login saveProduct(@RequestBody Login prod)
	{
		return loginRepository.save(prod);
	}
	@PutMapping(value="/login/{id}")
	public ResponseEntity updateLogin(@PathVariable(value="id") Long pId, @Valid @RequestBody Login pdata) {
		p3 = loginRepository.findById(pId);
		Login p2 = p3.get();
		p2.setPassword(pdata.getPassword());
		p2.setUserid(pdata.getUserid());
		
		Login updateProduct = loginRepository.save(p2);
		return ResponseEntity.ok(updateProduct);
		
	}
	@DeleteMapping(value="/login/{id}")
	public ResponseEntity deleteLogin(@PathVariable(value="id")Long pId) {
		loginRepository.deleteById(pId);
		return ResponseEntity.noContent().build();
	}
	
	
	
	
}
