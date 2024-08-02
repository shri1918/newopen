import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Testimonials = (props) => {
  useEffect(() => {
    AOS.init({
      // duration: 1000, // duration of the animation
      // easing: 'ease-in-out', // easing function for the animation
    });
  }, []);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" data-aos="fade-up" data-aos-duration="2000">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
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
