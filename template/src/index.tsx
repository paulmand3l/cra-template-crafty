import React from 'react';
import ReactDOM from 'react-dom/client';
import RecoilRoot from 'recoil';
import App from './App';
import 'normalize.css';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
