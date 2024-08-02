import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "./image";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = (props) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (props.data) {
      const images = galleryRef.current.querySelectorAll(".portfolio-item");
      gsap.fromTo(
        images,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [props.data]);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items" ref={galleryRef}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 portfolio-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
