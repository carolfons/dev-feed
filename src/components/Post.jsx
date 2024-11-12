import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/carolfons.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Caroline Fonseca</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href="https://carolfons.github.io/my-portfolio/">carolfons.github.io/my-portfolio</a> </p>
        <p>
            <a href="#">#novoprojeto </a> {' '}
            <a href="#">#portolio </a> 
        </p>
      </div>

      {/* comentários */}
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
