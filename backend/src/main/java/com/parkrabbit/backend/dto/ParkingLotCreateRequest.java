package com.parkrabbit.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParkingLotCreateRequest {

    @NotBlank(message = "parkingLotName is required")
    private String parkingLotName;

    @NotBlank(message = "status is required")
    private String status;

    @NotNull(message = "latitude is required")
    private Double latitude;
    
    @NotNull(message = "Longitude is required")
    private Double longitude;

}
