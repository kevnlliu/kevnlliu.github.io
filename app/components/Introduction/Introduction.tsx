import styles from "./Introduction.module.css";
import headshot from "./headshot.jpg";

const Introduction = () => {
  return (
    <div id={styles["introduction"]}>
      <div id={styles["introduction-titles"]}>
        <h1 id={styles["introduction-titles-main"]}>Hi, I'm Kevin!</h1>
        <h3 id={styles["introduction-titles-sub"]}>
          Engineer, Entrepreneur, Excursionist, Exuberant Enjoyer of Existing,
          etc.
        </h3>
      </div>

      <div id={styles["introduction-content"]}>
        <img src={headshot} id={styles["introduction-content-headshot"]}></img>
        <p id={styles["introduction-content-text"]}>
          ...I am a software engineer based out of Seattle, Washington. Welcome
          to my website! I am a graduate of the University of California,
          Irvine, and love to learn all things technical. Check out my about me
          to learn more about my hobbies and interests!
          <br />
          <br />
          Or, keep scrolling to view my work history. Feel free to reach out to
          me&nbsp;
          <a
            href="mailto:kevinliu.ucirvine@gmail.com"
            id={styles["introduction-content-text-email"]}
          >
            @kevinliu.ucirvine@gmail.com
          </a>
          . Enjoy your stay :)
        </p>
      </div>
    </div>
  );
};

export default Introduction;
