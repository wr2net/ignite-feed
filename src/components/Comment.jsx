import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img src="http://github.com/wr2net.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Wagner Rigoli da Rosa</strong>
                <time title="17 de Outubro de 2023 às 06:13" dateTime="2023-10-17 06:45:38">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>

            </header>

            <p>Muto bom Devon, parabéns!!</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>


        </div>
      </div>
    </>
  );
}
