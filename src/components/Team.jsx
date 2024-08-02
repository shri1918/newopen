import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSVG from "./AnimatedSVG";
gsap.registerPlugin(ScrollTrigger);

export const Team = (props) => {
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const teamElements = gsap.utils.toArray(".team");

      gsap.fromTo(
        teamElements,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.4,
          duration: 2,
          scale: 1.05,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none play reverse",
            // markers: true, // remove this line in production
          },
        }
      );
    }, teamRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="team" className="text-center" style={{position: 'relative'}}>
      <div className="container">
        <div className="col-sm-4 col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row" ref={teamRef}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
   
    </div>
  );
};
