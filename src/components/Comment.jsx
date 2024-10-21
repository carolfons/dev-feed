import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/diego3g.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:30">Cerca de 2h atrás</time>
                    </div>
                    <button title='Deletar comentário'><Trash size={20}/></button>
                </header>
                <p>Muito Bom Carol! Parabéns</p>

            </div>
            <footer>  
                <button><ThumbsUp/></button>
                Like <span>20</span>
            </footer>
        </div>
    </div>
  )
}
