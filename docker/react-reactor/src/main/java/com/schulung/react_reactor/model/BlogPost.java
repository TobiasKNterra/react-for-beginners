package com.schulung.react_reactor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@AllArgsConstructor
@Data
public class BlogPost {

    @Id
    private int id;

    private String title;
    private String content;

    private String description;

    private String ts;
}
