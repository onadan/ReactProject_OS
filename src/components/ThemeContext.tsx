import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

 export interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>; 
  }
  
  const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPref = window.localStorage.getItem('color-theme');
      if (typeof storedPref === 'string') {
        return storedPref;
      }
  
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
      return 'light'; 
    }
  
    return 'light'; 
  };
  

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    initialTheme:any,
    children: ReactNode;
  }
  
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (rawTheme: string | undefined) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';
      
        if (rawTheme) {
          root.classList.remove(isDark ? 'light' : 'dark');
          root.classList.add(rawTheme);
          localStorage.setItem('color-theme', rawTheme);
        }
      };
      

    // if(initialTheme){
    //     rawSetTheme(initialTheme)
    // }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
