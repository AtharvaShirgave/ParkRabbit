import GenericCardComponent from "./GenericCardComponent";
import { useNavigate } from "react-router";
import invoiceAnimation from '../assets/pay invoice blue.json'
export default function BillingComponent() {
    const navigate = useNavigate()
  return (
    <GenericCardComponent
      title="Invoices"
      description="View and download all your parking invoices."
      buttonText="View Invoices"
      onButtonClick={() => navigate("/invoices")}
      animationData={invoiceAnimation}
    />
  );
}
