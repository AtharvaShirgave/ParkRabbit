import GenericCardComponent from "./GenericCardComponent";
import parkingAnimation from "../assets/parkingAnimation.json";
import { parkingLots } from "../api/parkingLots";
import { useState } from "react";
export default function ParkingComponent() {
  const [parking, setParking] = useState([]);
  const handleParkingLots = async () => {
    try {
      const response = await parkingLots();
      setParking(response);
      console.log(response)
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  const renderView = () => {
    if (parking.length !== 0) {
      return (
        <div className="flex gap-2 justify-baseline flex-wrap">
          {parking.map((lot) => (
            <GenericCardComponent
              key={lot.id}
              title={lot.name}
              description={`Euro ${lot.hourlyRate}/hour • ${lot.freeSlots} Available slots • ${lot.occupiedSlots} Occupied slots • ${lot.reservedSlots} Reserved slots  • ${lot.totalSlots} Total slots`}
              buttonText="Reserve"
              onButtonClick={() => console.log("Reserve", lot.id)}
              animationData={parkingAnimation}
            />
          ))}
        </div>
      );
    } else {
      return (
        <GenericCardComponent
          title="Car Parking"
          description="Use Park Rabbit Parking feature which allows you to park you car in the nearest parking lot."
          buttonText="Park"
          onButtonClick={handleParkingLots}
          animationData={parkingAnimation}
        />
      )
    }
  };
  return renderView()
}
