package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Category;
import com.launchacademy.reviews.models.Restaurant;
import com.launchacademy.reviews.repositories.CategoryRepository;
import com.launchacademy.reviews.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository, CategoryRepository categoryRepository) {
        this.restaurantRepository = restaurantRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Restaurant> getAllRestaurants() {
        return (List<Restaurant>) this.restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Integer id) {
        return this.restaurantRepository.findById(id).orElse(null);
    }

    public ResponseEntity<Map<String, String>> persistRestaurant(Restaurant restaurant) {
        Category category = categoryRepository.findByName(restaurant.getCategory().getName().toLowerCase());
        if(category == null){
            category = new Category();
            category.setName(restaurant.getCategory().getName().toLowerCase());
            categoryRepository.save(category);
        }

        restaurant.setCategory(category);
        restaurantRepository.save(restaurant);

        return new ResponseEntity<>(new HashMap<String, String>(), HttpStatus.CREATED);
    }
}
