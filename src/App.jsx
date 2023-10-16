import {Header} from "./components/Header.jsx";
import {Post} from "./Post.jsx";

import styles from './App.module.css';

import './global.css';
import {Sidebar} from "./components/Sidebar.jsx";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Wagner Rigoli da Rosa"
            content="asdf asdfasdf açlsdkfj açsdjf çlasdjfça jsdçfljasçldjf çlasdjçf ljasdçlfkjaçlskdjf a"
          />
          <Post
            author="Maria Joaquina"
            content="asdf asdfasdf açlsdkfj açsdjf çlasdjfça jsdçfljasçldjf çlasdjçf ljasdçlfkjaçlskdjf a"
          />
          <Post
            author="Terezinha da Silva"
            content="asdf asdfasdf açlsdkfj açsdjf çlasdjfça jsdçfljasçldjf çlasdjçf ljasdçlfkjaçlskdjf a"
          />
        </main>
      </div>
    </>
  )
}