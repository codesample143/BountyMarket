package com.Akaei.Store.BountyMarket.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Table(name="products")
public class Product {
    @Id
    @Column("pid")
    private Integer uid;
    @Column("name")
    private String username;
    @Column("link")
    private String link;
    @Column("price")
    private String price;

    public Product(){

    }
    public Product(String username, String link, String price) {
        this.username = username;
        this.link = link;
        this.price = price;
    }

    public Integer getUid() {
        return uid;
    }

    public String getUsername(){
        return username;
    }

    public String getLink(){
        return link;
    }

    public String getPrice(){
        return price;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setPrice(String price) {
        this.price = price;
    }   

    public void setUid(Integer uid){
        this.uid = uid;
    }
}
