import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';
import { Home } from './views/Home';

const App = () => (
  <div>
    <Home />
  </div>
);

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
