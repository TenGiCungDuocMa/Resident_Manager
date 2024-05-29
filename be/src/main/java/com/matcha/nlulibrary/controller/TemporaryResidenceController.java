package com.matcha.nlulibrary.controller;

import com.matcha.nlulibrary.dto.TemporaryResidenceRequest;
import com.matcha.nlulibrary.entity.TemporaryResidenceEntity;
import com.matcha.nlulibrary.service.TemporaryResidenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/tam-tru")
@RequiredArgsConstructor
public class TemporaryResidenceController {
    private final TemporaryResidenceService temporaryResidenceService;

    /**
     * 8.Hệ thống nhận dữ liệu từ form đăng kí
     * @param request
     * @return
     */
    @PostMapping("")
    public ResponseEntity<Object> createTemporaryResidence(@RequestBody TemporaryResidenceRequest request) {
        temporaryResidenceService.createTemporaryResidence(request);
        /**
         * Nhận thông báo kết quả nếu lưu được thông tin vào
         */
        return ResponseEntity.created(null).body(Map.of("message", "Đã lưu thông tin đăng kí tạm trú"));
    }
}