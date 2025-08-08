import { useEffect, useState } from "react";
import PayForm from "./PayForm";
import BookingCard from "./BookingCard";
import styles from "./Credit.module.css";

// Helper function to generate random booking price details
const generateBookingDetails = () => {
  const pricePerNight = (Math.random() * 150 + 50).toFixed(2); // $50.00 to $200.00
  const nights = Math.floor(Math.random() * 5) + 1; // 1 to 5 nights
  const discountPercent = (Math.random() * 15 + 5).toFixed(1); // 5.0% to 20.0%
  const serviceFee = (Math.random() * 80 + 20).toFixed(2); // $20.00 to $100.00

  const subtotal = (pricePerNight * nights).toFixed(2);
  const discountAmount = (subtotal * (discountPercent / 100)).toFixed(2);
  const total = (subtotal - discountAmount + parseFloat(serviceFee)).toFixed(2);

  return {
    row1: `$${pricePerNight} x ${nights}`,
    res1: `$${subtotal}`,
    row2: `${discountPercent}% campaign discount`,
    res2: `-$${discountAmount}`,
    row3: "Service fee",
    res3: `$${serviceFee}`,
    row4: "Total",
    res4: `$${total}`,
  };
};

function CreditPage({ data }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [priceRows, setPriceRows] = useState({});

  useEffect(() => {
    setFadeIn(true);
    setPriceRows(generateBookingDetails());
    console.log(data);
  }, [data]);

  return (
    <div
      className={`${styles["main-page"]} container ${
        fadeIn ? styles["fade-enter-active"] : styles["fade-enter"]
      }`}
    >
      <PayForm />

      <BookingCard
        imageSrc={data?.image || "/images/venice.png"}
        title={data?.name || "Venice, Rome & Milan"}
        subtitle={data?.category?.title || "Category"}
        status="Opened"
        dates="Sunday - Thursday"
        priceDetails="Price Details"
        row1={priceRows.row1}
        res1={priceRows.res1}
        row2={priceRows.row2}
        res2={priceRows.res2}
        row3={priceRows.row3}
        res3={priceRows.res3}
        row4={priceRows.row4}
        res4={priceRows.res4}
        cancellationPolicy={`Location: ${data?.location || "Unknown"}`}
      />
    </div>
  );
}

export default CreditPage;
