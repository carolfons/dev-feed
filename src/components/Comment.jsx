import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
import { set } from 'date-fns';

export function Comment({content, onDeleteComment}) {

const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment() { 
    onDeleteComment(content);
}

//função para dar like no comentário	
function handleLikeComment() {
    //atualiza o estado do likeCount
    setLikeCount((state) => {
        return state + 1
    });
}

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
                    <button 
                    onClick={handleDeleteComment}
                    title='Deletar comentário'><Trash size={24}/></button>
                </header>
                <p>{content} </p>
            </div>
            <footer>  
                <button
                onClick={handleLikeComment}><ThumbsUp/>Like <span>{likeCount}</span></button>
            </footer>
        </div>
    </div>
  )
}

