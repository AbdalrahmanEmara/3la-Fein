import bg from "./img/herobg.png";

function HeroBg() {
  return (
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        width: "100vw",
      }}
    ></div>
  );
}

export default HeroBg;
