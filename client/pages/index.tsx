import React from 'react';

const Index = () => {
  return (
    <main className='main'>
      <header className='header'>
        <div className='nav-bar'>
          <button className='btn'>Home</button>
          <button className='btn'>About</button>
          <button className='btn'>Search</button>
        </div>
        <div className='nav-menu'>


        </div>
      </header>
      <body className='body'>
        <div className='header'></div>
        <div className='main-purpose'>
          <div className='btn-main-purpose'>Business</div>
                    <div className='btn-main-purpose'>Tourism</div>
          <div className='btn-main-purpose'>Immigration</div>

        </div>
      </body>

    </main>

  );
}

export default Index;