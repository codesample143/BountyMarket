package com.Akaei.Store.BountyMarket.API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {
    @GetMapping("/")
    public String home(){
        return "Welcome to Bounty Market API!";
    }
}
