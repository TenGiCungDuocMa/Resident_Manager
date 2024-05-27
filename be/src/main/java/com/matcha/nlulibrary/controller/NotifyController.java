package com.matcha.nlulibrary.controller;

import com.matcha.nlulibrary.entity.NotifyEntity;
import com.matcha.nlulibrary.service.NotifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/notify")
@RequiredArgsConstructor
public class NotifyController {

    private final NotifyService notifyService;

    @GetMapping
    public ResponseEntity<List<NotifyEntity>> getAllNotifies() {
        return ResponseEntity.ok(notifyService.getAllNotifies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<NotifyEntity>> getNotifyDetail(@PathVariable int id) {
        return ResponseEntity.ok(notifyService.getNotifyDetail(id));
    }
}
