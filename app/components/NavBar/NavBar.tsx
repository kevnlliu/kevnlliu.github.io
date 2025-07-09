import styles from "./Navbar.module.css";
import linkedinIcon from "./linkedinIcon.png";

import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav id={styles["navbar"]}>
      <NavLink to="/" end className={styles["navbar-item"]}>
        Home
      </NavLink>
      <NavLink to="/about" end className={styles["navbar-item"]}>
        About Me
      </NavLink>
      <NavLink to="/resume" end className={styles["navbar-item"]}>
        Resume
      </NavLink>
      <a
        href="https://www.linkedin.com/in/kevinnliu/"
        className={styles["navbar-item"]}
        target="_blank"
      >
        <img
          src={linkedinIcon}
          style={{
            width: "25px",
          }}
        ></img>
      </a>
    </nav>
  );
};

export default NavBar;
