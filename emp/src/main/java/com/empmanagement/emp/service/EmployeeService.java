package com.empmanagement.emp.service;

import com.empmanagement.emp.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAllemployee();

    Employee saveemployee(Employee employee);

    Employee getEmployeeById(Long id);

    void updateEmployee(Long id,Employee updatedemp);

    void deleteEmployee(Long id);

    List<Employee> getAllEmployee();
}
