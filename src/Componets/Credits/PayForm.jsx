import { Dropdown } from "bootstrap";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PayForm() {

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Card number (16 digits)
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // Card holder name (letters and spaces)
    if (!/^[a-zA-Z\s]{3,}$/.test(formData.cardHolder)) {
      newErrors.cardHolder = "Enter a valid card holder name";
    }

    // Expiration date (must be in the future)
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Please select an expiry date";
    } else {
      const today = new Date();
      const expiry = new Date(formData.expiryDate);
      if (expiry <= today) {
        newErrors.expiryDate = "Expiry date must be in the future";
      }
    }

    // CVC (3 or 4 digits)
    if (!/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = "CVC must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("✅ Card details are valid and ready to submit!");
    }
  };

  const [method, setMethod] = useState("Nganthuy");


  const changeMethod = (e) => {
    setMethod(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }
  return (
    <div className="container container-credit mt-4 ">

      <form onSubmit={handleSubmit}>
        <div className="w-100">

          <div className="d-flex align-item-center">
          <button type="button" onClick={handleClick}  style={{
    background: "none",
    border: "none",
    padding: "0",
    marginRight: "12px",
    marginBottom: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  }}><svg  className="border-none" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7108 20.9794C13.1697 21.4789 12.3261 21.4451 11.8267 20.904L7.51897 16.2374C7.0475 15.7267 7.0475 14.9394 7.51896 14.4287L11.8267 9.76197C12.3261 9.22087 13.1697 9.18712 13.7108 9.68659C14.2519 10.1861 14.2856 11.0296 13.7861 11.5707L11.544 13.9997L24.4987 13.9997C25.2351 13.9997 25.832 14.5967 25.832 15.3331C25.832 16.0694 25.2351 16.6664 24.4987 16.6664L11.544 16.6664L13.7861 19.0953C14.2856 19.6364 14.2519 20.4799 13.7108 20.9794Z" fill="#23262F"/>
</svg></button>
          <h2 className="mb-3 head">Confirm & Pay</h2>
        </div>

        <h3 className="mb-3">Pay With</h3>
        <p className="text-muted mb-2 ">SAVED CONTACT INFO</p>
        <select className="select mb-4" value={method} name="select">
          <option value="Nganthuy">Nganthuy</option>
          <option value="Audi">Audi</option>
          <option value="veini">vieni</option>
          <option value="Nganthuy">Nganthuy</option>
        </select>
      </div>

        <h3 className="mb-3 ">Credit Card</h3>

        <div className="d-flex align-items-center mb-4">
          <img src="Visa.png" />
          <img src="g13.png" alt="" />
        </div>

        <div>
          <p className="text-muted mb-2">CARD NUMBER</p>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
          {errors.cardNumber && (
            <small className="text-danger">{errors.cardNumber}</small>
          )}
        </div>

        <div>
          <p className="text-muted mb-2">CARD HOLDER</p>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
          />
          {errors.cardHolder && (
            <small className="text-danger">{errors.cardHolder}</small>
          )}
        </div>

        <div className="mb-3 d-flex justify-content-between gx-3 info">
          <div>
            <p className="text-muted mb-3">EXPIRATION DATE</p>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            {errors.expiryDate && (
              <small className="text-danger">{errors.expiryDate}</small>
            )}
          </div>

          <div>
            <p className="text-muted mb-3">CVC</p>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={4}
            />
            {errors.cvc && (
              <small className="text-danger">{errors.cvc}</small>
            )}
          </div>
        </div>

        <div className="check d-flex g-2 align-items-center mb-3">
          <input
            id="save"
            type="checkbox"
            name="saveCard"
            checked={formData.saveCard}
            onChange={handleChange}
          />
          <label htmlFor="save">Save Card</label>
        </div>

         <button type="submit" className="btn confirm-btn">Confirm</button>
      </form>

    </div>
  );
}

export default PayForm;
