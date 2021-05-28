package com.launchacademy.reviews.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping(value = {"/", "/restaurants", "/restaurants/new", "/restaurants/show/{id}","/aboutus"})
    public String forward() {
        return "forward:/index.html";
    }
}
