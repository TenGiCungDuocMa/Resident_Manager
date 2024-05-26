//package com.matcha.nlulibrary.filter;
//
//import com.matcha.nlulibrary.auth.JwtTokenProvider;
//import com.matcha.nlulibrary.service.UserService;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//import org.springframework.web.servlet.HandlerExceptionResolver;
//
//import java.io.IOException;
//
////@Component
////@RequiredArgsConstructor
////@Builder
////@Slf4j
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//    private final JwtTokenProvider tokenProvider;
//    private final UserService userService;
//    private final HandlerExceptionResolver resolver;
//    @Autowired
//    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider,
//                                   UserService userService,
//                                   @Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver,
//                                   TokenRepository tokenRepository) {
//        this.tokenProvider = tokenProvider;
//        this.userService = userService;
//        this.resolver = resolver;
//        this.tokenRepository = tokenRepository;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        // lay jwt tu request
////        String jwt = getJwtFromRequest(request);
//        try{
////            if (StringUtils.hasText(jwt)){
////                // lay username tu jwt
////                String username = tokenProvider.getUserNameFromJwt(jwt);
////                // lay thong tin nguoi dung tu username
////                UserDetails userDetails = userService.loadUserByUsername(username);
////                if (userDetails != null && tokenProvider.validateToken(jwt, userDetails)){
////                    // neu nguoi dung hop le set thong tin cho Security Context
////                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
////                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
////                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
////                }
////            }
//            String authHeader = request.getHeader("Authorization");
//            String token = null;
//            String username = null;
//            System.out.println("da vao filter");
//            if(authHeader != null && authHeader.startsWith("Bearer ")){
//
//                token = authHeader.substring(7);
//                username = tokenProvider.getUserNameFromJwt(token);
//                System.out.println("user name: " + username);
//            }
//
//            if (username != null && SecurityContextHolder.getContext().getAuthentication()==null){
//                UserDetails userDetails = userService.loadUserByUsername(username);
//
//                boolean isTokenValid = tokenRepository.findByToken(token).map(token1 -> !token1.isExpired()).orElse(false);
//                if (tokenProvider.validateToken(token, userDetails) && isTokenValid){
//                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                }
//            }
//            filterChain.doFilter(request, response);
//        }catch (Exception ex) {
//            System.out.println("loi");
//            resolver.resolveException(request,response,null,ex);
//
//        }
//
//
//    }
//
//    private String getJwtFromRequest(HttpServletRequest request) {
//        String bearerToken = request.getHeader("Authorization");
//        // Kiểm tra xem header Authorization có chứa thông tin jwt không
//        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//}
