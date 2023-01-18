import React, { useState } from 'react';
import css from './Header.module.scss';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  //header shadow hook
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Serhii</div>
        {/* navlist */}
        <ul
          className={`flexCenter ${css.navlist}`}
          style={getMenuStyles(navOpen)}
        >
          <li>
            <a href='/'>Experience</a>
          </li>
          <li>
            <a href='/'>Education</a>
          </li>
          <li>
            <a href='/'>Portfolio</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1234567789</p>
            <BiPhoneCall size={24} />
          </li>
        </ul>
        {/* For $sm and $md screens */}
        <div
          className={css.menuIcon}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
