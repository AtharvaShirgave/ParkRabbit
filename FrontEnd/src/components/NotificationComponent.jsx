import GenericCardComponent from "./GenericCardComponent"
import notificationAnimation from '../assets/Notification Bell.json'
import { useNavigate } from "react-router"
export default function NotificationComponent(){
    const navigate = useNavigate()
    return (
        <GenericCardComponent
      title="Notifications"
      description="You can View and Manage your notifications here.."
      buttonText="View Notifications"
      onButtonClick={() => navigate("/notifications")}
      animationData={notificationAnimation}
    />
    )
}