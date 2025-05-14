package com.empmanagement.emp.model;


import jakarta.persistence.*;

@Entity
@Table(name="employees")
//@Data
public class Employee {
    public String getFirstname;
    public String getLastname;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(name="first_name")
    private  String firstname;

    @Column(name="last_name")
    private String lastname;

    @Column(name="email")
    private String email;
    public Employee(Long id, String firstname, String lastname, String email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    public void setFirstname(Object getFirstname) {
    }

    public void setLastname(Object getLastname) {
    }

    public Object getEmail() {
        return null;
    }

    public void setEmail(Object email) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    }


