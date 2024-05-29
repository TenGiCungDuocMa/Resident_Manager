package com.matcha.nlulibrary.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "notify")
public class NotifyEntity {
    @Id
    private int id;
    private String title;
    private String content;
    private Date postedTime;
    private String detail;
}
