// src/context/ThemeContext.js
import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // We always start in dark mode
    const isDarkMode = true;

    useEffect(() => {
        // Add the 'dark' class to the body to enable dark mode styles
        document.body.classList.add('dark');

        // Optionally, you could add any other dark mode specific setup here
        // e.g., fetching user preferences, etc.
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
