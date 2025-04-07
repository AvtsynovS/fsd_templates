import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { Normalize } from 'styled-normalize';

import { Application } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Normalize />
    <Application />
  </React.StrictMode>,
);
