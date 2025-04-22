// Components/ThemeContext.js
import React, { createContext, useContext, useState } from 'react'

const Themetoggle = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <Themetoggle.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </Themetoggle.Provider>
  )
}

export const useTheme = () => useContext(Themetoggle)
