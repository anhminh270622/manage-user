import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from '@tanstack/react-router';
import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
const router = createRouter({ routeTree });
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
