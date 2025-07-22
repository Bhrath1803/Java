package Service;

import Model.Employee;
import Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    public Employee save(Employee emp){
        return repo.save(emp);
    }
    public List<Employee> getAll(){
        return repo.findAll();
    }
    public Optional<Employee> getById(String id){
        return repo.findById(id);
    }
}
