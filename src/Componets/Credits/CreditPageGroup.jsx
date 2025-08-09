import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PayForm from "./PayForm";
import BookingCard from "./BookingCard";
import styles from "./Credit.module.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function CreditPageGroup() {
  const location = useLocation();
  const data = location.state || {};

  const [fadeIn, setFadeIn] = useState(false);

  // Extract base price and current members from data
  const basePrice = data.row1
    ? parseFloat(data.row1.split("$")[1].split(" ")[0])
    : 100;

  const currentMembers = data.row1 ? parseInt(data.row1.split("x ")[1]) : 1;

  const discountPercent = data.row2
    ? parseFloat(data.row2.split("%")[0]) / 100
    : 0.1;

  const serviceFee = data.row3 ? parseFloat(data.res3.replace("$", "")) : 50;

  // Increase members count by 1 (you join)
  const updatedMembers = currentMembers + 1;

  // Calculate new total group price with updated members count
  const subtotal = basePrice * updatedMembers;
  const discountAmount = subtotal * discountPercent;
  const totalGroupPrice = subtotal - discountAmount + serviceFee;

  // Calculate your payment (just 1 member)
  const yourSubtotal = basePrice * 1;
  const yourDiscountAmount = yourSubtotal * discountPercent;
  const yourTotal = yourSubtotal - yourDiscountAmount + serviceFee;

  useEffect(() => {
    setFadeIn(true);
    console.log("Received data:", data);
  }, [data]);

  return (
    <div>
      <Nav />
      <div
        className={`${styles["main-page"]} container ${
          fadeIn ? styles["fade-enter-active"] : styles["fade-enter"]
        }`}
      >
        <PayForm
          bookingInfo={{
            image: data.image || "/images/venice.png",
            category: `${data.category} - Group` || "Category",
            totalPrice: `$${yourTotal.toFixed(2)}`,
            name: data.name || "Venice, Rome & Milan",
          }}
        />

        <BookingCard
          imageSrc={data.image || "/images/venice.png"}
          title={data.name || "Venice, Rome & Milan"}
          subtitle={data.category || "Category"}
          status="Opened"
          dates="Sunday - Thursday"
          priceDetails="Price Details"
          row1={`$${basePrice.toFixed(2)} x ${updatedMembers} members`}
          res1={`$${subtotal.toFixed(2)}`}
          row2={`${(discountPercent * 100).toFixed(0)}% campaign discount`}
          res2={`-$${discountAmount.toFixed(2)}`}
          row3="Service fee"
          res3={`$${serviceFee.toFixed(2)}`}
          row4="Group Total"
          res4={`$${totalGroupPrice.toFixed(2)}`}
          cancellationPolicy={`Location: ${data.location || data.name}`}
        />

        <div
          style={{
            marginTop: "1.5rem",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
            fontSize: "16px",
            fontWeight: "600",
            color: "#333",
            maxWidth: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.25rem",
            }}
          >
            <span>Your Payment</span>
            <span>${yourTotal.toFixed(2)}</span>
          </div>
          <div
            style={{ fontWeight: "normal", fontSize: "14px", color: "#555" }}
          >
            {`(Includes service fee of $${serviceFee.toFixed(2)})`}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreditPageGroup;
