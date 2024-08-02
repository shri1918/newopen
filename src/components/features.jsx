import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Features = (props) => {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(boxRef.current, { opacity: 0, y: 100 },{
      opacity: 1, y: 0,
      // stagger: 0.4, // Delay between animations of each element
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 800px", // Adjust start point as needed
        end: "bottom 1000px", // Adjust end point as needed
        toggleActions: "play reverse play reverse", // Play forward on enter, reverse on leave
        // scrub: 1 // Sync animation with scroll
      }
    }, )
    gsap.fromTo(".feature-item",
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0,
        stagger: 0.4, // Delay between animations of each element
        scrollTrigger: {
          trigger: ".feature-item",
          start: "top 75%", // Adjust start point as needed
          end: "bottom 75%", // Adjust end point as needed
          toggleActions: "play reverse play reverse", // Play forward on enter, reverse on leave
          scrub: 1 // Sync animation with scroll
        }
      }
    );
  }, [props.data]); // Re-run effect when props.data changes

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 feature-item">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
