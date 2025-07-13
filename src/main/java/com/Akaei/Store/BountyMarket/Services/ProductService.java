package com.Akaei.Store.BountyMarket.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Akaei.Store.BountyMarket.repo.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
}
