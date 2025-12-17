package com.parkrabbit.backend.controller;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.parkrabbit.backend.entity.ParkingLot;
import com.parkrabbit.backend.service.ParkingLotService;


@RestController
@RequestMapping("/api/parking-lots")
public class ParkingLotController {
    private final ParkingLotService parkingLotService;

    public ParkingLotController(ParkingLotService parkingLotService){
        this.parkingLotService = parkingLotService;
    }

    @GetMapping
    public List<ParkingLot> getAllParkingLots(){
        return parkingLotService.getAllParkingLots();

    }

    @PostMapping
    public ParkingLot createParkingLot(@RequestBody ParkingLot parkingLot){
        return parkingLotService.createParkingLot(parkingLot);
    }

}
