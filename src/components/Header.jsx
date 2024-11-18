import styles from './Header.module.css'

import IgniteLogo from '../assets/BuzzTed.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src = {IgniteLogo} alt="Ignite Logo" />
            <h1>Dev Feed</h1>
        </header>

    );
}