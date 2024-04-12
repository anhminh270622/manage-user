import React from 'react';
import { Layout, Flex, ConfigProvider } from 'antd';
import { RouterProvider } from '@tanstack/react-router';
import { createRouter } from '@tanstack/react-router';
import './App.css';
import themeConfig from './themeConfig';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
const queryClient = new QueryClient()
const router = createRouter({ routeTree })
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryClientProvider>
);
export default App;