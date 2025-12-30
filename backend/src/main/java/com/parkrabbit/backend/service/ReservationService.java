package com.parkrabbit.backend.service;

import com.parkrabbit.backend.dto.ReservationResponseDto;
import com.parkrabbit.backend.entity.ParkingSlot;
import com.parkrabbit.backend.entity.Reservation;
import com.parkrabbit.backend.entity.ReservationStatus;
import com.parkrabbit.backend.entity.enums.ParkingSlotStatus;
import com.parkrabbit.backend.repository.ParkingSlotRepository;
import com.parkrabbit.backend.repository.ReservationRepository;
import com.parkrabbit.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class ReservationService {

    private final ParkingSlotRepository slotRepository;
    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;

    public ReservationService(ParkingSlotRepository slotRepository,
                              ReservationRepository reservationRepository,
                              UserRepository userRepository) {
        this.slotRepository = slotRepository;
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public ReservationResponseDto reserveSlot(Long parkingLotId, Long userId) {

        if (!userRepository.existsById(userId)) {
            throw new IllegalArgumentException(
                    "User does not exist with id: " + userId
            );
        }

        //  One active reservation per user
        boolean hasActiveReservation =
                reservationRepository.existsByUserIdAndStatus(
                        userId,
                        ReservationStatus.ACTIVE
                );

        if (hasActiveReservation) {
            throw new IllegalStateException(
                    "User already has an active reservation"
            );
        }

        // Find first FREE slot in selected parking lot
        ParkingSlot slot = slotRepository
                .findFirstByParkingLotIdAndStatus(
                        parkingLotId,
                        ParkingSlotStatus.FREE
                )
                .orElseThrow(() ->
                        new RuntimeException("No free slots available")
                );

        slot.setStatus(ParkingSlotStatus.RESERVED);

        Reservation reservation = new Reservation();
        reservation.setUserId(userId);
        reservation.setParkingSlot(slot);
        reservation.setParkingLotId(parkingLotId);
        reservation.setReservedAt(LocalDateTime.now());
        reservation.setExpiresAt(LocalDateTime.now().plusMinutes(10));
        reservation.setStatus(ReservationStatus.ACTIVE);

        reservation = reservationRepository.save(reservation);

        ReservationResponseDto response = new ReservationResponseDto();
        response.setReservationId(reservation.getId());
        response.setSlotId(slot.getId());
        response.setParkingLotId(slot.getParkingLot().getId());
        response.setParkingLotName(slot.getParkingLot().getName());
        response.setParkingLotAddress(slot.getParkingLot().getAddress());
        response.setReservedAt(reservation.getReservedAt());
        response.setExpiresAt(reservation.getExpiresAt());

        return response;
    }
}
