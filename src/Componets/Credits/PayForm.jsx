import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./PayForm.module.css";
import { addHistoryToCurrentUser } from "../Forms/Storage";

function PayForm({ bookingInfo }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
  });

  const [errors, setErrors] = useState({});
  const [method, setMethod] = useState("Nganthuy");

  const navigate = useNavigate();

  const formatCardNumber = (value) => {
    // Remove all non-digit chars
    const digits = value.replace(/\D/g, "").substring(0, 16);
    // Insert spaces every 4 digits
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "method") {
      setMethod(value);
    } else if (name === "cardNumber") {
      setFormData({
        ...formData,
        cardNumber: formatCardNumber(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    // Remove spaces before validation
    const rawCardNumber = formData.cardNumber.replace(/\s/g, "");

    if (!/^\d{16}$/.test(rawCardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!/^[a-zA-Z\s]{3,}$/.test(formData.cardHolder)) {
      newErrors.cardHolder = "Enter a valid card holder name";
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Please select an expiry date";
    } else {
      const today = new Date();
      const expiry = new Date(formData.expiryDate);
      if (expiry <= today) {
        newErrors.expiryDate = "Expiry date must be in the future";
      }
    }
    if (!/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = "CVC must be 3 or 4 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success(
        `✅ Payment method "${method}" selected and card details valid!`
      );
      const historyEntry = {
        image: bookingInfo.image,
        category: bookingInfo.category,
        totalPrice: bookingInfo.totalPrice,
        name: bookingInfo.name,
        timestamp: new Date().toISOString(),
      };

      addHistoryToCurrentUser(historyEntry);
      navigate("/profile");
    }
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={`${styles.container} container-credit mt-4`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="w-100">
          <div className="d-flex align-items-center mb-4">
            <button
              type="button"
              onClick={handleClick}
              className={styles["back-button"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7108 20.9794C13.1697 21.4789 12.3261 21.4451 11.8267 20.904L7.51897 16.2374C7.0475 15.7267 7.0475 14.9394 7.51896 14.4287L11.8267 9.76197C12.3261 9.22087 13.1697 9.18712 13.7108 9.68659C14.2519 10.1861 14.2856 11.0296 13.7861 11.5707L11.544 13.9997L24.4987 13.9997C25.2351 13.9997 25.832 14.5967 25.832 15.3331C25.832 16.0694 25.2351 16.6664 24.4987 16.6664L11.544 16.6664L13.7861 19.0953C14.2856 19.6364 14.2519 20.4799 13.7108 20.9794Z"
                  fill="#ccc"
                />
              </svg>
            </button>
            <h2 className="head ml-2">Confirm & Pay</h2>
          </div>

          <h3 className="mb-3">Pay With</h3>
          <p className="text-muted mb-2">SAVED CONTACT INFO</p>
          <select
            name="method"
            className={styles.select}
            value={method}
            onChange={handleChange}
          >
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="amex">American Express</option>
            <option value="discover">Discover</option>
            <option value="jcb">JCB</option>
          </select>
        </div>

        <h3 className="mb-3 mt-3">Credit Card</h3>

        <div className="d-flex align-items-center mb-4">
          <img src="Visa.png" alt="Visa" />
          <img src="g13.png" alt="Card logos" />
        </div>

        <div className="mb-3">
          <label className={styles.label}>CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={19} // 16 digits + 3 spaces
            className={styles.input}
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
            pattern="[0-9\s]*"
          />
          {errors.cardNumber && (
            <small className="text-danger">{errors.cardNumber}</small>
          )}
        </div>

        <div className="mb-3">
          <label className={styles.label}>CARD HOLDER</label>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            className={styles.input}
            placeholder="John Doe"
          />
          {errors.cardHolder && (
            <small className="text-danger">{errors.cardHolder}</small>
          )}
        </div>

        <div
          className={`mb-3 d-flex justify-content-between gx-3 ${styles.info}`}
        >
          <div>
            <label className={styles.label}>EXPIRATION DATE</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.expiryDate && (
              <small className="text-danger">{errors.expiryDate}</small>
            )}
          </div>

          <div className="ms-3">
            <label className={styles.label}>CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={4}
              className={styles.input}
              placeholder="123"
              inputMode="numeric"
              pattern="\d{3,4}"
            />
            {errors.cvc && <small className="text-danger">{errors.cvc}</small>}
          </div>
        </div>

        <button type="submit" className={`btn ${styles.confirmBtn}`}>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default PayForm;
