import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maria Soledade</strong>
              <time title="05 de Dezembro às 19:44h" dateTime="2002-12-05 19:44h">Agora a pouco</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
