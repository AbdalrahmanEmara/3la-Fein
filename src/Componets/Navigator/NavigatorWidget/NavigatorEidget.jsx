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
          title="We'll give you recommendations"
          text="Get fresh and exciting ideas for things to do anytime. We make it easy to explore new experiences."
        />
        <Navigator
          color="yellow"
          icon={
            <span role="img" aria-label="bolt">
              ⚡
            </span>
          }
          title="Join groups with shared interests"
          text="Meet and connect with people who share your passions. Build meaningful connections through shared activities."
        />
        <Navigator
          color="pink"
          icon={
            <span role="img" aria-label="star">
              ⭐
            </span>
          }
          title="Discover trending events near you"
          text="Discover activities perfectly matched to your preferences, and we help you find trending events near you"
        />
      </div>
    </>
  );
};

export default NavigatorEidget;
