import PayForm from "../Credits/PayForm";
import BookingCard from "../Credits/BookingCard";
import "./Credit.css";
function CreditPage() {
  return (
    <div className="container main-page d-flex justfy-content-between vh-100">
      <PayForm />
      <BookingCard
        imageSrc="/images/venice.png"
        title="Venice, Rome & Milan"
        subtitle="Karineside"
        status="Opened"
        dates="Sunday - Thursday"
        priceDetails="Price Details"
        row1="$102 x 3 nights "
        res1="$306"
        row2="10% campaign discount"
        res2="-$30.6"
        row3="Service fee"
        res3="$50"
        row4="Total"
        res4="$225.4"
        cancellationPolicy="Free cancellation until 3:00 PM on May 05, 2024"
      />
    </div>
  );
}

export default CreditPage;
