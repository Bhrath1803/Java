package com.empmanagement.emp.controller;

import com.empmanagement.emp.model.Employee;
import com.empmanagement.emp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public abstract class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getallusers(){
        return employeeService.getAllEmployee();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getuserbyid(@PathVariable Long id){
        Employee user = employeeService.getEmployeeById(id);

        return  user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @PostMapping

    public  Employee adduser(@RequestBody Employee user){
        return  employeeService.saveemployee(user);
    }
}
