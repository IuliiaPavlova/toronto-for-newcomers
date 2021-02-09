import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { links } from '../../../utils/data'

import css from './TopBar.module.scss'

const TopBar = () => {
  const [ isBarOpen, setIsBarOpen ] = useState(false)
  return (
    <header className={css.nav}>
      <div className={css.navBar}>
        <div className={css.linksStack}>
          {
            links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>
                      {text}
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </div>
      </div>
      <div className={css.navMenu}>
        <MdMenu className='icon' />
    </div>
      <div className={css.navContact}>
        <button className={css.btn}>contact us</button>
      </div>
      </header>
  );
}

export default TopBar;