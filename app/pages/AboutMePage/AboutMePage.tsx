import styles from "./AboutMePage.module.css";
import { useState, useEffect, useRef } from "react";

import img1 from "./photos/japan.jpg";
import img2 from "./photos/korea.jpg";
import img3 from "./photos/sunset.jpg";
import img4 from "./photos/zion.jpg";
import img5 from "./photos/deer.jpg";
import img6 from "./photos/hawaii.jpeg";
import img7 from "./photos/seattle.jpg";
import img8 from "./photos/graduation.jpg";
import img9 from "./photos/rave.jpg";
import img10 from "./photos/camping.jpg";
import img11 from "./photos/climbing.jpeg";
import img12 from "./photos/hiking.jpg";
import img13 from "./photos/barbeque.jpeg";
import img14 from "./photos/bigbear.jpeg";

const AboutMePage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageHovered = useRef(false);

  const images = [
    { image: img1, desc: "Rainy Day in Japan" },
    { image: img2, desc: "Cherry Blossom Season in Korea" },
    { image: img3, desc: "Sunset at Joshua Tree" },
    { image: img4, desc: "Sightseeing at Zion" },
    { image: img5, desc: "Feeding Deer at Nara" },
    { image: img6, desc: "Scenic Wiew in Oahu" },
    { image: img7, desc: "Group Photo at the Needle" },
    { image: img8, desc: "Graduation Jump" },
    { image: img9, desc: "Fred Again at the Coliseum" },
    { image: img10, desc: "Camping with Friends" },
    { image: img11, desc: "Outdoor Bouldering Fun" },
    {
      image: img12,
      desc: "Group Photo at the Top of the World! (Ryan Mountain)",
    },
    { image: img13, desc: "Authentic Japanese Barbeque" },
    { image: img14, desc: "Night Snowboarding in Big Bear" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!imageHovered.current) return;

      if (e.key === "ArrowRight") {
        setImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setImageIndex((prev) => (prev + images.length - 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <div id={styles["about-me-page"]}>
      <div id={styles["about-me-page-card"]}>
        <h1 id={styles["about-me-page-card-title"]}>About Me</h1>
        <div
          id={styles["about-me-page-card-image-container"]}
          onMouseEnter={() => (imageHovered.current = true)}
          onMouseLeave={() => (imageHovered.current = false)}
        >
          <img
            src={images[imageIndex].image}
            id={styles["about-me-page-card-image-container-image"]}
          />
          <div id={styles["about-me-page-card-image-container-caption"]}>
            {images[imageIndex].desc}
          </div>
        </div>
        <div id={styles["about-me-page-card-image-select"]}>
          <button
            onClick={() =>
              setImageIndex((imageIndex + images.length - 1) % images.length)
            }
          >
            Prev
          </button>
          {[...Array(images.length).keys()].map((index, i) =>
            imageIndex !== index ? (
              <button
                onClick={() => setImageIndex(index)}
                className={
                  styles["about-me-page-card-image-select-circle-unselected"]
                }
                key={i}
              ></button>
            ) : (
              <div
                className={
                  styles["about-me-page-card-image-select-circle-selected"]
                }
                key={i}
              ></div>
            )
          )}
          <button
            onClick={() => setImageIndex((imageIndex + 1) % images.length)}
          >
            Next
          </button>
        </div>
      </div>
      <p id={styles["about-me-page-text"]}>
        This page is about me - Kevin! I am a recent college graduate from
        Orange County, California. As a software engineer, I enjoy programming
        like how I enjoy puzzle and strategy games: from finding
        efficient/simple solutions to challenging problems to learning new
        technologies, I strive to improve a bit technically everyday!
        <br></br>
        <br></br>
        Outside of coding, I enjoy staying active through a plethora of hobbies.
        I love to gym, climb, snowboard (once I move), and try(!) to stay in
        shape through cardio or sports. Additionally, I love exploring and
        traveling, and aim to visit a new country or national park every year.
        Next stop: somewhere in Europe (not sure yet) and Yosemite!
      </p>
    </div>
  );
};

export default AboutMePage;
