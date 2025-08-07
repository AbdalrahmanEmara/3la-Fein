import { Dropdown } from "bootstrap";
import { useState } from "react";

function PayForm() {
  const [method, setMethod] = useState("Nganthuy");

  const changeMethod = (e) => {
    setMethod(e.targert.value);
  };
  return (
    <div className="container container-credit">
      <div>
        <h3 className="mb-3">Pay With</h3>
        <p className="text-muted mb-3 ">SAVED CONTACT INFO</p>
        <select value={method} name="select">
          <option value="Nganthuy">Nganthuy</option>
          <option value="Audi">Audi</option>
          <option value="veini">vieni</option>
          <option value="Nganthuy">Nganthuy</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3 ">Credit Card</h3>

        <div className="d-flex align-items-center mb-4">
          <img src="Visa.png" />
          <img src="g13.png" alt="" />
        </div>

        <div>
          <p className="text-muted mb-3">CARD NUMBER</p>
          <input type="number" />
        </div>

        <div>
          <p className="text-muted mb-3">CARD HOLDER</p>
          <input type="text" />
        </div>

        <div className=" d-flex justify-content-between gx-3 info">
          <div>
            <p className="text-muted mb-3">EXPERATION DATE</p>
            <input type="date" />
          </div>

          <div>
            <p className="text-muted mb-3">CVC</p>
            <input type="text" />
          </div>
        </div>
        <div>
          <input id="save" type="checkbox" />
          <label htmlFor="save">Save Card</label>
        </div>
      </div>

      <button className="btn confirm-btn">Confirm</button>
    </div>
  );
}

export default PayForm;
