package com.schulung.react_reactor.controller;


import com.schulung.react_reactor.model.BlogPost;
import com.schulung.react_reactor.repository.BlogPostRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@RestController()
@RequestMapping("/posts")
@AllArgsConstructor
public class BlogController {

  private BlogPostRepository blogPostRepository;

  @GetMapping
  public Flux<BlogPost> getAllBlogPosts() {
    return blogPostRepository.findAll()
        .switchIfEmpty(Flux.error(new Exception("No Blogposts found")));
  }

  @GetMapping("/{id}")
  public Mono<BlogPost> getBlogPosts(@PathVariable int id) {
    return blogPostRepository.findById(id)
        .switchIfEmpty(Mono.error(new Exception("No Blogpost for id found")));
  }

  @PostMapping()
  public Mono<BlogPost> addBlogPost(@RequestBody BlogPost blogPost) {
    return blogPostRepository.save(blogPost);
  }

  @PutMapping()
  public Mono<BlogPost> updateBlogPosts(@RequestBody BlogPost blogPost) {
    return blogPostRepository.save(blogPost);
  }

  @DeleteMapping("/{id}")
  public Mono<Void> updateBlogPosts(@PathVariable int id) {
    return blogPostRepository.deleteById(id);
  }
}
