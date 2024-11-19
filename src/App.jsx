import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carolfons.png',
      name: 'Caroline Fonseca',
      role: 'Fullstack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio 🚀'},
      {type: 'link', content: 'https://carolfons.github.io/my-portfolio/'},
    ],
    publishedAt: new Date('2024-11-11 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mopig.png',
      name: 'mopig',
      role: 'Web Front-end Developer'
    },
  content: [
      {type: 'paragraph', content: 'Hello Guys'},
      {type: 'paragraph', content: 'New Project! Check it out!'},
      {type: 'link', content: 'https://github.com/mopig/mopig'},
    ],
    publishedAt: new Date('2024-11-12 10:00:00'),
  }
]

export function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
    </div>

    </>
  );
}
