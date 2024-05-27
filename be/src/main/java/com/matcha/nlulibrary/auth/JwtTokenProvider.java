package com.matcha.nlulibrary.auth;

import com.matcha.nlulibrary.entity.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
@Component
@Slf4j
@RequiredArgsConstructor
public class JwtTokenProvider {
    // Đoạn JWT_SECRET này là bí mật, chỉ có phía server biết
    private final String JWT_SECRET = "4509e1e738867146f0abda72624724a2dc84560753ffecfaf66bc35e50988f15";
    //Thời gian có hiệu lực của chuỗi jwt
    private final long JWT_EXPIRATION = 604800000L;
    // tạo ra jwt từ thông tin người dùng
    public String generateToken(UserEntity userDetails){
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
        // tạo chuỗi json web token từ id của user
        return Jwts.builder()
                .setSubject(userDetails.getId())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    // Lấy thông tin user từ jwt
    public String getIdFromJwt(String token){
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(getSignKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return claims.getSubject();
        } catch (MalformedJwtException e) {
            throw new MalformedJwtException("Invalid token");
        }
    }

    public boolean validateToken(String authToken, UserDetails userDetails) {
        final String userName = getIdFromJwt(authToken);
        return userName.equals(userDetails.getUsername());
    }
    private Key getSignKey(){
        byte[] keyBytes = Decoders.BASE64.decode(JWT_SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
