import React, { FunctionComponent } from 'react';
import Banner from '../components/Banner/Banner';

const About: FunctionComponent = () => {
  return (
    <div>
      <Banner />
      <h2 className='noContentH2'>this component<br/>is in development.<br/> content coming soon</h2>
    </div>
  );
}

export default About;