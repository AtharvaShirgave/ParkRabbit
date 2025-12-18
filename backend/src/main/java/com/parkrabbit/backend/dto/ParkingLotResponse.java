package com.parkrabbit.backend.dto;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ParkingLotResponse {
    
    private Long id;
    private String parkingLotName;
    private String status;
    private Double latitude;
    private Double longitude;
}
