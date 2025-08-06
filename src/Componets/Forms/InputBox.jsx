import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

Formik;
function InputBox(props) {
  return (
    <div>
      <div className="mb-3">
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}

export default InputBox;
