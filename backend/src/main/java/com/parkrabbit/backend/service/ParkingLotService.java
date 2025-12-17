package com.parkrabbit.backend.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.parkrabbit.backend.entity.ParkingLot;
import com.parkrabbit.backend.repository.ParkingLotRepository;


@Service
public class ParkingLotService {
    private final ParkingLotRepository parkingLotRepository;
    public ParkingLotService(ParkingLotRepository parkingLotRepository){
        this.parkingLotRepository = parkingLotRepository;
    }
    // Get all parking lots
    public List<ParkingLot> getAllParkingLots(){
        return parkingLotRepository.findAll();
    }

    // create parking lots
    public ParkingLot createParkingLot(ParkingLot parkingLot){
        return parkingLotRepository.save(parkingLot);
    }


}
