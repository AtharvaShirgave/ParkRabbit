package com.parkrabbit.backend.exception;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse {
    

    private int status;
    private String message;
    private LocalDateTime timestamp;
    
}
