import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder = {false} src="https://github.com/diego3g.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:30">Cerca de 2h atrás</time>
                    </div>
                    <button title='Deletar comentário'><Trash size={24}/></button>
                </header>
                <p>Muito Bom Carol! Parabéns 🔥🚀</p>
            </div>
            <footer>  
                <button><ThumbsUp/>Like <span>20</span></button>
            </footer>
        </div>
    </div>
  )
}

