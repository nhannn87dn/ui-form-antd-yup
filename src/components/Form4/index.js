import React from 'react'
import FormAccount from './components/Form'
import Header from './components/Header'
import styles from './styles.module.css'
export default function Form4() {
  return (
    <div  className={styles.layout_wrapper}>
        <div className={styles.container}>
            <Header />
            <FormAccount />
        </div>
    </div>
  )
}
