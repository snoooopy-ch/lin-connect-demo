import React from 'react';
import Header from './components/layouts/header';
import MainVisual from './components/layouts/main-visual';
import About from './components/layouts/about';
import Items from './components/layouts/items';
import InfoList from './components/layouts/info-list';
import Contact from './components/layouts/contact';
import Footer from './components/layouts/footer';
import './App.scss';
import { InfoItem } from './components/molecules/info';


function App() {
  const infos = [
    {
      title: '2022ウィンターコレクション発表のお知らせ', date: '2022/10/01'
    },
    {
      title: '2022ウィンターコレクション発表のお知らせ', date: '2022/10/01'
    },
    {
      title: '2022ウィンターコレクション発表のお知らせ', date: '2022/10/01'
    }
  ] as InfoItem[];
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainVisual />
        <About />
        <Items />
        <InfoList 
          infos={infos}/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
