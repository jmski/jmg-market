import React from "react";
import styles from "./navbar.module.scss";

const NavBar = () => {
  const navData = ["Home", "Work", "Services", "Training", "About", "Contact"];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>jmg creative markerting</div>
      <ul className={styles.navbar__links}>
        {navData.map((item) => (
          <li className="app-flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button>inquire</button>
    </div>
  );
};

export default NavBar;
