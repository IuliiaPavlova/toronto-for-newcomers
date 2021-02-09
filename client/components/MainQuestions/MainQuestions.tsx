import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { AppState } from '../../store/init';

import css from './MainQuestions.module.scss'

const MainQuestions = () => {
  const categories = useSelector((store: AppState) => store.categories);

  return (
    <div className={css.categoryList}>
      {
        categories.map((category) => (
          <Link key={category.id} href={`/categories?cat=${category.type}`}>
            <div className={css.categoryItem}>
              <h3 className={css.categoryQuestion}>
                {category.type}
              </h3>
            <div className={css.categoryIcon}>
              <category.icon className='icon'/>
            </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default MainQuestions;