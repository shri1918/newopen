import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const Services = (props) => {
  const boxRef = useRef(null);
  const boxRef1 = useRef(null);

  // const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(boxRef.current, { opacity: 0, x: 100 },{
      opacity: 1, x: 0,
      stagger: 0.4, // Delay between animations of each element
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 800px", // Adjust start point as needed
        end: "bottom 1000px", // Adjust end point as needed
        toggleActions: "play reverse play reverse", // Play forward on enter, reverse on leave
        // scrub: 1 // Sync animation with scroll
      }
    }, )
    gsap.fromTo(".col-md-4",
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0,
        stagger: 0.4, // Delay between animations of each element
        scrollTrigger: {
          trigger: ".col-md-4",
          start: "top 75%", // Adjust start point as needed
          end: "bottom 75%", // Adjust end point as needed
          toggleActions: "play reverse play reverse", // Play forward on enter, reverse on leave
          scrub: 1 // Sync animation with scroll
        }
      }
    );
  }, [props.data]); // Re-run effect when props.data changes

  return (
    <div id="services" className="text-center">
    <div style={{ marginTop: '-500px', transform: 'rotate(180deg)', overflow: 'hidden',marginBottom: '-200px' }}>
  <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/1000/svg" style={{ width: '100%' }}>
      <path fill="#fff" fillOpacity="1" d="M0,400L30,379.3C60,358,120,316,180,299.3C240,283,300,293,360,309.3C420,326,480,349,540,349.3C600,349,660,326,720,308C780,290,840,277,900,285.3C960,294,1020,326,1080,340C1140,354,1200,340,1260,326C1320,312,1380,290,1410,279.3L1440,270V800H0Z"></path>
    </svg>
  
  </div>
      <div className="container">
     
        <div className="section-title">
        
          <h2>Our services
          were made
          for you</h2>
          <p>
          Yes. It's that Easy. We make Online Shopping a Breeze. Web Source handles all the complex details in the background so you have a 100% hassle-free experience as we offer a range of services for your shipping needs.

          Always keep in mind that Pre-Alerts help us clear your package through Customs efficiently and accurately inorder get your purchases into your hands ASAP.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
