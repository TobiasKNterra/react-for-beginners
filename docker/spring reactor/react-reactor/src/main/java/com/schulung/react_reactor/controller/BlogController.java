package com.schulung.react_reactor.controller;


import com.schulung.react_reactor.model.BlogPost;
import com.schulung.react_reactor.repository.BlogPostRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@RestController()
@RequestMapping("/blog")
@AllArgsConstructor
public class BlogController {

    private BlogPostRepository blogPostRepository;

    @GetMapping
    public Flux<BlogPost> getAllBlogPosts()
    {
        return blogPostRepository.findAll().switchIfEmpty(Flux.just(new BlogPost(0,"hallo","content","des","ts")));
    }
}
