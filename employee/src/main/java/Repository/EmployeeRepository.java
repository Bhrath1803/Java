package Repository;

import Model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository  extends MongoRepository<Employee , String> {
}
