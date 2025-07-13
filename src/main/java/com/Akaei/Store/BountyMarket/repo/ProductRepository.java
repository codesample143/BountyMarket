package com.Akaei.Store.BountyMarket.repo;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import com.Akaei.Store.BountyMarket.Models.Product;

public interface ProductRepository extends ReactiveCrudRepository<Product, Integer> {
    
}
