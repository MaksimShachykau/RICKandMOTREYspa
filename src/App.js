import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/nav';
import Home from './components/home/home';
import CharactersContainer from './components/characters/charactersContainer'
import SeriesContain from './components/series/seriesContain';
import Location from './components/location/location';
import CharacterInfoContainer from './components/characterInfo/characterInfoContainer';
import Footer from './components/footer/footer';
function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <NavBar/>
        <main className = 'app-wrapper-content'>
          
            <Route path ='/home' render = { () => <Home/>}/>
          <div className = 'container'>
            <Route path ='/characters/:filter?' render = { () => <CharactersContainer/>}/>
            <Route path ='/series' render = { () => <SeriesContain/>}/>
            <Route path ='/location' render = { () => <Location/>}/>
            <Route path ='/character/:UserId?' render = { () => <CharacterInfoContainer/>}/>
          </div>
        </main>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
