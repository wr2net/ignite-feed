import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

export function Post({ author, content, publishedAt }) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // eslint-disable-next-line react/prop-types
  const publishedDateIso = publishedAt.toISOString()

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedDateIso}>Publicado {publishedDateRelativeToNow}</time>

        </header>

        <div className={styles.content}>
          {
            content.map(line => {
              if (line.type === 'paragraph') {
                return (
                  <>
                    <p>
                      {line.content}
                    </p>
                  </>
                );
              } else if (line.type === 'link') {
                return (
                  <>
                    <p>
                      <a href='#'>{line.content}</a>
                    </p>
                  </>
                );
              }
            })
          }
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
