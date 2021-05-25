package com.launchacademy.reviews.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor

public class Category {

    @Id
    //@SequenceGenerator
    //@GeneratedValue
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotBlank
    @Column(name = "name", nullable = false)
    private String name;

    public Category(String name){
        this.name = name;
    }
}
