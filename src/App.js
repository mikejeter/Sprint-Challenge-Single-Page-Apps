import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import Character from './components/Character';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/Character/:id" component={Character}/>
      <Route exact path="/CharacterList/" component={CharacterList}/>
    </main>
  );
}
