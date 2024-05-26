package com.matcha.nlulibrary.request;

import java.util.List;

public record QuestionRequest(
        String title,
        List<String> answers,
        String rightAnswer,
        String category
) {
}
