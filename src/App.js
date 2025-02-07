import React from 'react';
import './App.scss';

// eslint-disable-next-line
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line
const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is Misha</h2>
      <p className="Person__age">I am 37</p>
      <p className="Person__partner">My wife&apos;s name is Natasha</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Olya</h2>
      <p className="Person__partner">My husband&apos;s name is Maksym</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Alex</h2>
      <p className="Person__age">I am 25</p>
      <p className="Person__partner">I am not married</p>
    </section>
  </div>
);

export default App;
