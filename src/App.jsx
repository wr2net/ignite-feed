import {Header} from "./components/Header.jsx";
import {Post} from "./Post.jsx";

import './styles.css';
export function App() {
  return (
    <>
      <Header />
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
    </>
  )
}
