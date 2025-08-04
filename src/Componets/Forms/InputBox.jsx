import { Formik } from "formik";

Formik;
function InputBox(props) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.name[0] + props.name.slice(1)}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </div>
  );
}

export default InputBox;
