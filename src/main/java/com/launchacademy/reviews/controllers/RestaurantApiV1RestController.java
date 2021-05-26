package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Restaurant;
import com.launchacademy.reviews.services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class RestaurantApiV1RestController {

    private final RestaurantService restaurantService;

    @Autowired
    public RestaurantApiV1RestController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurants")
    public ResponseEntity getRestaurantList() {
        List<Restaurant> restaurants = restaurantService.getAllRestaurants();
        return new ResponseEntity<>(restaurants, restaurants.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @GetMapping("/restaurants/{id}")
    public ResponseEntity getRestaurantById(@PathVariable Integer id) {
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        return new ResponseEntity<>(restaurant, restaurant == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @PostMapping("/restaurants")
    public void createRestaurantPosting(@Valid @RequestBody Restaurant restaurant, BindingResult bindingResult){
        System.out.println(restaurant);
        if(bindingResult.hasErrors()){
            System.out.println(bindingResult.getAllErrors());
        } else {
            System.out.println("good");
        }
    }
}
