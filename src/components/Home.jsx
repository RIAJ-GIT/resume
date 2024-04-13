import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";


const Home = () => {


  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "HTML5",
        "CSS(LESS)",
        "REDUX",
        "REDUX-TOOL-KIT",
        "REACTJS",
        "TAILWINDCSS",
        "BROWSER DEBUGGING",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    }
  });

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <p>
        👨🏼‍💻 My passion is combining cutting-edge technologies like Tailwind CSS and React to create stunning and responsive websites. In the world of web development, I'm constantly excited to pick up new abilities and take on new challenges.
        </p>
          <a
            href="https://drive.google.com/file/d/1CxinB18VGeNkUq1VRa1fnH1ZshaNKpxA/view?usp=sharing"
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Resume📜
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;