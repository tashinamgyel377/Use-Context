import { useState } from 'react'
import Component2 from "./Components/component2"
import { Typography, Card, Switch } from "antd"
import UserContext from "./hook/AppContext"
import Greeting from './Components/Greeting'
import { ThemeProvider, useTheme } from './Components/Themetoggle'
import './App.css' // for light/dark theme styles

const AppContent = () => {
  const user = 'Sonam'
  const [language, setLanguage] = useState('en')
  const { darkMode, toggleTheme } = useTheme()

  const translations = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  }

  return (
    <UserContext.Provider value={{ user, language, setLanguage, translations }}>
      <div className={darkMode ? 'app dark' : 'app light'}>
        <Card
          style={{
            width: '500px',
            background: darkMode ? '#1f1f1f' : '#ffd666',
            color: darkMode ? '#fff' : '#000',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </div>

          <Typography.Title level={1} style={{ color: darkMode ? '#fff' : '#000' }}>
            {`Hello ${user}`}
          </Typography.Title>

          <Component2 />
          <Greeting />
        </Card>
      </div>
    </UserContext.Provider>
  )
}

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
)

export default App
