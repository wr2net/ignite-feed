import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/wr2net.png" />
            <div className={styles.authorInfo}>
              <strong>Wagner Rigoli da Rosa</strong>
              <span>Analista de Sistemas</span>
            </div>
          </div>
          <time title="17 de Outubro de 2023 às 06:13" dateTime="2023-10-17 06:45:38">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉&nbsp;&nbsp;<a href=""> jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>&nbsp;<a href="">#nlw</a> <a href="">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentário"
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
