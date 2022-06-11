import React from 'react';
import HiForm from './components/HiForm';
import LoginForm from './components/LoginForm';
import SigupForm from './components/SigupForm';
import './style.css'

export default function Form1() {

    const bg_mockup  = process.env.PUBLIC_URL + '/statics/img/girl.jpg';
    const bg_style = {
        backgroundImage: `url(${bg_mockup})`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'
    };

  return (
    <div className="layout_wrapper">
        <HiForm bg_style={bg_style}/>
        <SigupForm bg_style={bg_style} />
        <LoginForm bg_style={bg_style} />
   </div>
  )
}
