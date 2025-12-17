package com.parkrabbit.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.parkrabbit.backend.entity.ParkingLot;


public interface ParkingLotRepository 
        extends JpaRepository<ParkingLot, Long>{
    
}
