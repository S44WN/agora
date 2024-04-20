import "./Navitem.scss";
import { motion } from "framer-motion";
import { links } from "./navdata";
import { perspective } from "./anim";
import React from "react";

export default function Navitem() {
  return (
    <div className="navitems">
      <div className="navitemsbody">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
