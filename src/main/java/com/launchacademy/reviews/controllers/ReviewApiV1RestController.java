package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewApiV1RestController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewApiV1RestController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> createReviewPosting(@Valid @RequestBody Review review,
                                                                   BindingResult bindingResult){
        Map<String, String> errors = new HashMap<>();

        if (bindingResult.hasErrors()) {
            List<ObjectError> errorObjects = bindingResult.getAllErrors();
            errorObjects.forEach(error -> {
                errors.put(error.getCodes()[0].split("\\.")[2], error.getDefaultMessage());
            });
            return new ResponseEntity<>(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return reviewService.persistReview(review);
    }

}
