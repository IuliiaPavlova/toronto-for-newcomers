import React from 'react';
import Banner from '../components/Banner/Banner';
import TopBar from '../components/TopBar/TopBar';

const Index = () => {
  return (
      <section className='body'>
        <Banner />

        <div className='main-purpose'>
          <div className='btn-main-purpose'>Business</div>
          <div className='btn-main-purpose'>Tourism</div>
          <div className='btn-main-purpose'>Immigration</div>

        </div>
      </section>

  );
}

export default Index;