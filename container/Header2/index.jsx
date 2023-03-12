import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header2.scss";

const Header2 = () => {
  return (
    <div className="app__header app__flex ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <p className="p-text">Hello, I am</p>
        <h1 className="head-text">Jon</h1>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-img"
      >
        <img src={images.squirtle} alt="profile pic" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header2, "home2");
