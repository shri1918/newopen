import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import AnimatedSVG from "./AnimatedSVG";

export const Navigation = (props) => {
  const boxRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Animate the navbar brand
    gsap.fromTo(boxRef.current, { x: '-100%' }, { x: 0, duration: 1 });

    // Animate the nav links
    gsap.fromTo(navLinksRef.current, 
      { x: '-100%', opacity: 1 }, 
      { x: 0, opacity: 1, duration: 2, stagger: 0.3 }
    );
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
   
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" ref={boxRef}>
            Web Source
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {['Features', 'About', 'Services', 'Gallery', 'Testimonials', 'Team', 'Contact'].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="page-scroll" 
                  ref={(el) => (navLinksRef.current[index] = el)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
