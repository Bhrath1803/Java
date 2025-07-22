package Controller;


import Model.Employee;
import Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee emp){
        return service.save(emp);
    }
    @GetMapping("/displayAll")
    public List<Employee> displayAll(){
        return service.getAll();
    }
    @GetMapping("/display/{id}")
    public Optional<Employee> displayById(@PathVariable String id){
        return service.getById(id);
    }
}
