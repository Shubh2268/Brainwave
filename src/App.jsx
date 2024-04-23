import React from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from './components/Header';
import Section from './components/Section';

function App() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Section />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App;
