package com.matcha.nlulibrary;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
@SpringBootTest
class NluLibraryApplicationTests {
        public static void main(String[] args) {
            // Mã hóa thông tin bằng bcrypt
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String bcryptHash = encoder.encode("thuythuy");
            System.out.println("Bcrypt hash: " + bcryptHash);
        }


}
