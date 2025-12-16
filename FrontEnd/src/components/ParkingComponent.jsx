import GenericCardComponent from "./GenericCardComponent"
import parkingAnimation from '../assets/parkingAnimation.json'
export default function ParkingComponent(){

    return (
        <GenericCardComponent 
            title="Car Parking"
            description= "Use Park Rabbit Parking feature which allows you to park you car in the nearest parking lot."
            buttonText="Park"
            onButtonClick={()=>alert("Parking Request sent to RabbitMq")}
            animationData= {parkingAnimation}
        />
    )
}