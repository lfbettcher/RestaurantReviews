package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Restaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer> {

}
