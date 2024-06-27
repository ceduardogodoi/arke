import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { TodoContextProvider } from './contexts/todos/index.tsx';

const rootElement = document.querySelector<HTMLDivElement>('#root');
if (!rootElement) throw new Error('Missing root element.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
)
