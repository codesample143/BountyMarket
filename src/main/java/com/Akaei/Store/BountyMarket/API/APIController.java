package com.Akaei.Store.BountyMarket.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

import com.Akaei.Store.BountyMarket.Models.Product;
import com.Akaei.Store.BountyMarket.repo.ProductRepository;

@RestController
public class APIController {
    private final ProductRepository repository;

    @Autowired
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
/*
To implement caching with Redis in your Spring Boot project, follow these steps:

1. Add dependencies to your `pom.xml`:
    - spring-boot-starter-data-redis-reactive
    - spring-boot-starter-cache

2. Configure Redis in `application.properties`:
    ```
    spring.cache.type=redis
    spring.redis.host=localhost
    spring.redis.port=6379
    ```

3. Enable caching in your main application class:
    ```
    @SpringBootApplication
    @EnableCaching
    public class BountyMarketApplication { ... }
    ```

4. Annotate your repository or service methods with `@Cacheable`:
    ```

    @Cacheable("products")
    public Flux<Product> getAllProducts() {
         return repository.findAll();
    }
    ```

Note: For reactive repositories, you may need to use a custom cache manager or a library that supports reactive caching, as Spring's default cache abstraction is not fully reactive.
*/