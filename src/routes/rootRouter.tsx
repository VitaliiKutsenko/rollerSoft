import React from 'react';
import {
  createBrowserRouter,
  // createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {Layout} from "@src/pages/layout/layout";


export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
