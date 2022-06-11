import React from 'react'
import styles from './styles.module.css'

function SlideBox() {
  const bg_mockup  = process.env.PUBLIC_URL + '/statics/img/grovia.png';
  const bg_style = {
      backgroundImage: `url(${bg_mockup})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
  };

  return (
    <div className={styles.login_slider} style={bg_style}>
    </div>
  )
}

export default SlideBox