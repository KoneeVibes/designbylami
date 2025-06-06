import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ContextProvider } from './context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider
        theme={theme}
      >
        <QueryClientProvider
          client={queryClient}
        >
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
