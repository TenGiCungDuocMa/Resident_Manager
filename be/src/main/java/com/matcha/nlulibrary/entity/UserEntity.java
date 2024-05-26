package com.matcha.nlulibrary.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    private String id;
    private String name;
    private String anotherName;
    private Date dob;
    private Integer gender;
    private Date dateCreatedId;
    private String placeCreatedId;
    private String placeOfBirth;
    private String homeTown;
    private String resident;
    private String currentAddress;
    private String academicLevel;
    private String work;
    private String workPlace;
    private String nation;
    private String religion;
    private String nationality;
    private String passport;
    private String password;
}
