import React, { useRef, useEffect } from "react";
import { gsap, TimelineLite, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import loadingGif from '../img/move.gif';
import AnimatedSVG from "./AnimatedSVG";

gsap.registerPlugin(ScrollTrigger);

export const Header = (props) => {
  const boxRef = useRef(null);
  const boxRef1 = useRef(null);
  const introRef = useRef(null);
  const containerRef = useRef(null);
  const imageRevealRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(containerRef.current, 0, { css: { visibility: "visible" } })
      .to(imageRevealRef.current, 1.47, { width: "0%", ease: Power2.easeInOut })
      .from(imageRef.current, 1.4, { scale: 1.6, ease: Power2.easeInOut });

    gsap.timeline()
      .fromTo(boxRef.current, { y: '-100%' }, { y: 0, duration: 2 })
      .fromTo(boxRef1.current, { y: '300%' }, { y: 0, duration: 2 });
  }, []);

  return (
    <header id="header">
      <div className="intro" ref={introRef}>
        <div className="image-container" ref={containerRef}>
          <div className="image-reveal" ref={imageRevealRef}></div>
          <img src="../img/intro-bg.jpg" className="image" ref={imageRef} alt="Intro Background" />
        </div>
        <div className="col-sm-4 col-md-8 col-md-offset-2 intro-text">
                <h1 ref={boxRef}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p ref={boxRef1}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
      </div>
      {/* <div style={{rotate:('180deg'), overflow: 'hidden',position: 'absolute', width: '100%', }}>
      <AnimatedSVG />
      </div>*/}
    </header>
  );
};
