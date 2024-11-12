import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
  return (
   <aside className={styles.sidebar}>
    <img className = {styles.cover} 
    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="" />
    <div className={styles.profile}>
        <img className={styles.avatar}  src = "https://github.com/carolfons.png"/>
        <strong>Caroline Fonseca</strong>
        <span>Fullstack Developer </span>
    </div>
    <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu Perfil
        </a>
    </footer>
   </aside>
  );
}