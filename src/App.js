import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from './components/CharacterList';
import Character from './components/Character';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={CharacterList}/>
      <Route exact path="/Character/:id" component={Character}/>
    </main>
  );
}
