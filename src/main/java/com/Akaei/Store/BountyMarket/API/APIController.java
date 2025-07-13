package com.Akaei.Store.BountyMarket.API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

import com.Akaei.Store.BountyMarket.Models.Product;
import com.Akaei.Store.BountyMarket.repo.ProductRepository;

@RestController
public class APIController {
    private final ProductRepository repository;

    public APIController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public String home(){
        return "Welcome to Bounty Market API!";
    }
    @GetMapping("/products")
    public Flux<Product> getAllProducts(){
        return repository.findAll();
    }
}
