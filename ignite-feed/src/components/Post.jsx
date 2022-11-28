import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src="https://github.com/soledademaria.png" />
          <div className={styles.authorInfo}>
            <strong>Maria Soledade</strong>
            <span>Software Engineer</span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <p>Conteudo</p>
        <p>Conteudo</p>
        <p>Conteudo</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea placeholder="Deixe um comentário"/>

        <footer>
            <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <p>Comentário 1</p>
        <p>Comentário 2</p>
        <p>Comentário 3</p>
      </div>
    </article>
  );
}
