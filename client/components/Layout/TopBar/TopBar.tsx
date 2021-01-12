import Image from 'next/image';
import React from 'react';
import { MdMenu } from "react-icons/md";

import css from './TopBar.module.scss'

const TopBar = () => {
  return (
    <header className={css.nav}>
      <div className={css.navBar}>
        <button className={css.btn}>Home</button>
        <button className={css.btn}>About</button>
        <button className={css.btn}>Search</button>
      </div>
      <div className={css.navMenu}>
        <MdMenu className='icon'/>
      </div>
        
      </header>
  );
}

export default TopBar;