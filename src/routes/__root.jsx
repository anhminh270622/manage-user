import { createRootRoute, Outlet } from '@tanstack/react-router';
import React from 'react';
import LayoutContent from '../components/layout';



export const Route = createRootRoute({
    component: ({ children }) => (
        <>
            <Outlet />
        </>
    ),
});




