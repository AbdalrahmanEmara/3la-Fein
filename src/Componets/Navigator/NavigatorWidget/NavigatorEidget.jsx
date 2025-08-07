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
          text="Select the types of activities you're interested in — from outdoor fun to cultural, educational, or relaxing experiences."
        />
        <Navigator
          color="yellow"
          icon={
            <span role="img" aria-label="bolt">
              ⚡
            </span>
          }
          title="Share your travel preferences"
          text="Let us know your location, time, and who you're going with. We'll tailor everything to your vibe and availability."
        />
        <Navigator
          color="pink"
          icon={
            <span role="img" aria-label="star">
              ⭐
            </span>
          }
          title="We'll give you recommendations"
          text="Get personalized suggestions instantly. Explore events, activities, and groups that match your interests."
        />
      </div>
    </>
  );
};

export default NavigatorEidget;
