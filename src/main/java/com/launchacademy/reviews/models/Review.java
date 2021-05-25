package com.launchacademy.reviews.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.security.Timestamp;

@Entity
@Table(name = "reviews")
//@Getter
//@Setter
//@NoArgsConstructor
public class Review {
    @Id
    //@SequenceGenerator
    //@GeneratedValue
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotBlank
    @Column(name = "reviewer_name", nullable = false)
    private String reviewerName;

    @NotBlank
    @Column(name = "star_rating", nullable = false)
    private Integer starRating;

    @Column(name = "review")
    private String review;



    @Column(name = "created_at")
    private Timestamp createdAt; //???


    //???
    @ManyToOne
    @JoinColumn(name = "restaurant_Id")
    @JsonIgnoreProperties("reviews")
    private Restaurant restaurant;
}
