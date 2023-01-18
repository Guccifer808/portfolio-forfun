import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import css from './styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
