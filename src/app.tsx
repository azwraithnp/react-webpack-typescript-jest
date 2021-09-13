import React from 'react';
import ReactDom from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/index.css';
import { Home } from './views/Home';

const queryClient = new QueryClient();

const App = () => (
  <div>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </div>
);

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
