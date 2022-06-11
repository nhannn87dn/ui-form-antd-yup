import React from 'react'
import LoginForm from './components/LoginForm'
import SlideBox from './components/SlideBox'
import styles from './login.module.css'

function Form3() {
  return (
    <div className={styles.layout_wrapper}>
         <SlideBox />
         <LoginForm />
  </div>
    
  )
}

export default Form3  