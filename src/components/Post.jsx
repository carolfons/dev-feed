import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";


export function Post({author, content, publishedAt}) {

  const [comments, setComments] = useState([
   'Nice!',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  //formatar a data
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  });
  //formatar a data em relação ao momento atual
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  //função para adicionar um novo comentário
  function handleCreateNewComment() {
    event.preventDefault(); 
    //adicionando o novo comentário no array de comentários
    setComments([...comments, newCommentText]);
    //limpando o campo de comentário
    setNewCommentText('');
  }

  //função para setar o valor do novo comentário
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    //validando se o campo está preenchido 
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {

    //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
   
    //criando uma nova lista sem o comentário deletado
    const commentsWithoutDeleteOne = comments.filter(comment => {
      //retornando todos os comentários que não são iguais ao comentário que está sendo deletado
      return comment !== commentToDelete;
    });

    //atualizando o estado com os comentários que não foram deletados
    setComments(commentsWithoutDeleteOne);  
   	
  }

  //variável para verificar se o novo comentário está vazio desabilitando o botão
  const isNewCommentEmpty = newCommentText.length === 0;


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
      {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}> 👉 
                <a href={line.link}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>


      {/* comentários */}
      <form onSubmit ={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name="comment"
        value={newCommentText}
        placeholder="Deixe um comentário"
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required/>
        <footer>
          {/*se o length do comentário for maior que 0, então o botão está habilitado */}
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button></footer> 
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment 
          key = {comment} 
          content={comment} 
          onDeleteComment={deleteComment}
        />);
        })}
      </div>
    </article>
  );
}
