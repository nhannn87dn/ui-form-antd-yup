import React from 'react'
import RegisterForm from './components/RegisterForm'
import SliderBox from './components/SliderBox'
import styles from './styles.module.css'

function Form2() {
  return (
    <div className={styles.layout_wrapper}>
       <SliderBox />
       <RegisterForm />
    </div>
  )
}

export default Form2 