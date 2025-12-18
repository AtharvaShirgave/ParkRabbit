package com.parkrabbit.backend.mapper;
import org.springframework.stereotype.Component;
import com.parkrabbit.backend.dto.ParkingLotCreateRequest;
import com.parkrabbit.backend.dto.ParkingLotResponse;
import com.parkrabbit.backend.entity.ParkingLot;;



@Component
public class ParkingLotMapper {
    
    public ParkingLot toEntity(ParkingLotCreateRequest dto){
        ParkingLot entity = new ParkingLot();
        entity.setParkingLotName(dto.getParkingLotName());
        entity.setStatus(dto.getStatus());
        entity.setLatitude(dto.getLatitude());
        entity.setLongitude(dto.getLongitude());
        return entity;
    }

    public ParkingLotResponse toResponse(ParkingLot  entity){
        ParkingLotResponse response = new ParkingLotResponse();
        response.setId(entity.getId());
        response.setParkingLotName(entity.getParkingLotName());
        response.setStatus(entity.getStatus());
        response.setLatitude(entity.getLatitude());
        response.setLongitude(entity.getLongitude());
        return response;
    }
}
