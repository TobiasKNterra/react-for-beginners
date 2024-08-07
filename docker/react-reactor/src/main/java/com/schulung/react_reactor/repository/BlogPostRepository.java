package com.schulung.react_reactor.repository;

import com.schulung.react_reactor.model.BlogPost;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface BlogPostRepository extends R2dbcRepository<BlogPost, Integer> {

    Flux<BlogPost> findAll();
}
