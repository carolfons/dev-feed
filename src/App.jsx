import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />

        </main>
    </div>

    </>
  );
}
