import React, { FunctionComponent } from 'react';
import Banner from '../components/Banner/Banner';
import MainQuestions from '../components/MainQuestions/MainQuestions';
import TopBar from '../components/Layout/TopBar/TopBar';

const Index: FunctionComponent = () => {
  
  return (
      <section className='body'>
        <Banner />
        <MainQuestions />
      </section>

  );
}

export default Index;