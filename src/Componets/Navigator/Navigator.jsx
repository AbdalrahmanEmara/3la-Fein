import Style from "./Navigator.module.css";

const Navigator = ({ color, icon, title, text }) => (
  <button className={`${Style.navigator} ${Style[`${color}`]}`}>
    <div className={Style["icon-container"]}>{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </button>
);

export default Navigator;
