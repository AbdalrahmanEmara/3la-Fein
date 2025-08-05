import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ButtonScrollAnim = () => {
  const buttonRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top-=50",
        end: "+=800",
        scrub: 3,
        pin: buttonRef.current,
        markers: true, // Enable markers for debugging
      },
    });

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    tl.to(buttonRef.current, {
      y: 800,
      x: -500,
      ease: "bounce.out",
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="d-flex justify-content-center align-items-start mt-5"
      style={{ height: "500vh" }}
    >
      <button
        ref={buttonRef}
        className="btn btn-primary fs-4"
        style={{ padding: "10px 20px" }}
      >
        I’m Animated ✨
      </button>
    </div>
  );
};

export default ButtonScrollAnim;
