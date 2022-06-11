import React from 'react'
import styles from './styles.module.css'
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const class_nav = toggleMenu ? styles.navigation + (" ") + styles.navigation_mobile : styles.navigation ;
  return (
    <div className={styles.header_wrapper}>
        <div className={styles.logo}>AnyWhere App</div>
        <div className={styles.navigation_wrapper}>
            <div className={styles.toggleMobile}>
              <AiOutlineMenu color='#fff' size={25} onClick={()=> {
                setToggleMenu(v => !v);
              }} />
            </div>
            <ul className={class_nav}>
                <li className={styles.item}><a href='http://localhost:3000/'>Home</a></li>
                <li className={styles.item}><a href='http://localhost:3000/'>Join</a></li>
            </ul>
        </div>
    </div>
  )
}
