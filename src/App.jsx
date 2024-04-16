import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';
import { routeTree } from './routeTree.gen';
import themeConfig from './themeConfig';
import NotFound from './components/notFound';
const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return (
      <NotFound />
    )
  }
})
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryClientProvider>
);
export default App;