import GenericCardComponent from "./GenericCardComponent";
import userAnimation from '../assets/User Outlined.json'
export default function AccountComponent() {
  return (
    <GenericCardComponent
      title="User Name"
      description="Hi there👋, I am Abinash :)"
    //   buttonText="View Account"
    //   onButtonClick={() => navigate("/notifications")}
      animationData={userAnimation}
    />
  );
}
