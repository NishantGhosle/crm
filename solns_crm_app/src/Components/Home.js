import React from 'react';
import './home.css';
import MyInboxHome from './MyInboxHome';
import ShortcutBar from './ShortcutBar';

const Home = () => {
  return (
    <div className='home-outer-div' >
        <ShortcutBar />
        <MyInboxHome />
    </div>
  )
}

export default Home;