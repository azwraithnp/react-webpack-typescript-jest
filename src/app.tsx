import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld';
import './styles/index.css';

const App = () => (
  <div>
    <HelloWorld />
  </div>
);

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
