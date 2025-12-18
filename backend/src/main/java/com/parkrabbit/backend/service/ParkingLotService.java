package com.parkrabbit.backend.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.parkrabbit.backend.dto.ParkingLotCreateRequest;
import com.parkrabbit.backend.dto.ParkingLotResponse;
import com.parkrabbit.backend.entity.ParkingLot;
import com.parkrabbit.backend.mapper.ParkingLotMapper;
import com.parkrabbit.backend.repository.ParkingLotRepository;


@Service
public class ParkingLotService {
    private final ParkingLotRepository parkingLotRepository;
    private final ParkingLotMapper parkingLotMapper;

     public ParkingLotService(
            ParkingLotRepository parkingLotRepository,
            ParkingLotMapper parkingLotMapper
    ) {
        this.parkingLotRepository = parkingLotRepository;
        this.parkingLotMapper = parkingLotMapper;
    }
    // Get all parking lots
    public List<ParkingLot> getAllParkingLots(){
        return parkingLotRepository.findAll();
    }

    // create parking lots
    public ParkingLotResponse createParkingLot(ParkingLotCreateRequest request){
        ParkingLot entity =  parkingLotMapper.toEntity(request);
        ParkingLot saved = parkingLotRepository.save(entity);
        
         return parkingLotMapper.toResponse(saved);
    }
}
