import React from 'react';
import type { PathRouteProps } from 'react-router-dom';
import Home from '../pages/home';

import Dashboard from '../pages/dashboard'
import Buydragons from '../pages/buydragons'
import Dragons from '../pages/dragons'

// const Home = React.lazy(() => import('@/lib/pages/home'));
// const Eggs = React.lazy(() => import('@/lib/pages/dragons'))
// const Dashboard = React.lazy(() => import('@/lib/pages/dashboard'))
// const Buydragons = React.lazy(() => import('@/lib/pages/buydragons'))

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dragons',
    element: <Dragons />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/buydragons',
    element: <Buydragons />,
  },
]

export const privateRoutes: Array<PathRouteProps> = [];
