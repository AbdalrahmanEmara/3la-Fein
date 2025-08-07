import { useState } from "react";

function InputBox(props) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-3" style={{ position: "relative" }}>
      <input
        type={isPassword && showPassword ? "text" : props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        className="form-control"
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontSize: "0.9rem",
            color: "#007bff",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}

export default InputBox;
