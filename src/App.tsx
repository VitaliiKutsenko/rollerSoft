import React from 'react';
import './App.css';
import {ErrorBoundary} from "@src/services/errorBoundary/errorBoundary";
import {rootRouter} from "@src/routes/rootRouter";
import {RouterProvider} from "react-router-dom";
import {GlobalStyleComponent} from "@src/style/globalStyle";

export const App = () => {
  return (
      <>
          <GlobalStyleComponent />
          <ErrorBoundary>
              <RouterProvider router={rootRouter} />
          </ErrorBoundary>
      </>
  );
}