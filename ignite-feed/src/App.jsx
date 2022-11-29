import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mariasoledadee.png",
      name: "Maria Soledade",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera!!" },
      { type: "paragraph", content: "Acabei de iniciar as aulas do ignite" },
      { type: "paragraph", content: "Bora pro próximo nível, avante!" },
      { type: "paragraph", content: "Fala Galera!!" },
      { type: "link", content: "#ignite" },
    ],
    publishedAt: new Date("2022-11-28 20:47:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketesear",
    },
    content: [
      { type: "paragraph", content: "Fala Galera!" },
      { type: "paragraph", content: "Vamos para mais uma nlw" },
      { type: "paragraph", content: "Avante!" },
      { type: "link", content: "#neverstoplearning!" },
    ],
    publishedAt: new Date("2022-11-26 10:37:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
