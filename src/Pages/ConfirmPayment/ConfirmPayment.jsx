import Footer from "../../Componets/Footer/Footer";
import Nav from "../../Componets/Nav/Nav";
import CreditPage from "../../Componets/Credits/CreditPage";
import { useLocation } from "react-router-dom";

const ConfirmPayment = () => {
  const location = useLocation();
  const data = location.state?.props;

  return (
    <div>
      <Nav />
      <CreditPage data={data} />
      <Footer />
    </div>
  );
};

export default ConfirmPayment;
