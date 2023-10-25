import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";
import {useState} from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="http://github.com/wr2net.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Wagner Rigoli da Rosa</strong>
                <time title="17 de Outubro de 2023 às 06:13" dateTime="2023-10-17 06:45:38">Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>

            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>


        </div>
      </div>
    </>
  );
}
