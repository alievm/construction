import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./routing/router.jsx";
import {ThemeProvider} from "./ThemeContext.jsx";
import "franken-ui/js/core.iife";
import "franken-ui/js/icon.iife";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
      <RouterProvider router={router}/>
      </ThemeProvider>
  </StrictMode>,
)
