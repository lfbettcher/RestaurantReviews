package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Restaurant;
import com.launchacademy.reviews.services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        Boolean isNull = restaurant == null;
        return new ResponseEntity<>(isNull ? new Restaurant() : restaurant, isNull ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @PostMapping("/restaurants")
    public ResponseEntity<Map<String, String>> createRestaurantPosting(@Valid @RequestBody Restaurant restaurant, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();

        if (bindingResult.hasErrors()) {
            List<ObjectError> errorObjects = bindingResult.getAllErrors();
            errorObjects.forEach(error -> {
                errors.put(error.getCodes()[0].split("\\.")[2], error.getDefaultMessage());
            });

            return new ResponseEntity<>(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return restaurantService.persistRestaurant(restaurant);
    }
}
