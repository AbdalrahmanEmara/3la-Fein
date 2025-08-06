import Navigator from "../Navigator";
import History from "../../History/History";
import navStyles from "../Navigator.module.css";

const NavigatorEidget = () => {
  return (
    <>
      <div className={navStyles.container}>
        <Navigator
          color="blue"
          icon={
            <span role="img" aria-label="lightbulb">
              💡
            </span>
          }
          title="Tell us what you want to do"
          text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        />
        <Navigator
          color="yellow"
          icon={
            <span role="img" aria-label="bolt">
              ⚡
            </span>
          }
          title="Share your travel preference"
          text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        />
        <Navigator
          color="pink"
          icon={
            <span role="img" aria-label="star">
              ⭐
            </span>
          }
          title="We'll give you recommendations"
          text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
        />
      </div>
    </>
  );
};

export default NavigatorEidget;
