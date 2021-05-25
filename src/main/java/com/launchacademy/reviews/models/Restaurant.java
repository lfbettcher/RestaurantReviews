package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "restaurants")
@Getter
@Setter
@NoArgsConstructor
public class Restaurant {
    @Id
    //@SequenceGenerator
    //@GeneratedValue
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotBlank
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank
    @URL
    @Column(name = "img_url", nullable = false)
    private String imgUrl;

    @URL
    @Column(name = "website_url")
    private String websiteUrl;

    @NotBlank
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotBlank
    @Column(name = "address")
    private String address;

    @NotBlank
    @Column(name = "open_time", nullable = false)
    private Integer openTime;

    @NotBlank
    @Column(name = "close_time", nullable = false)
    private Integer closeTime;


    //???
    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("categories")
    private Category categories;
}
