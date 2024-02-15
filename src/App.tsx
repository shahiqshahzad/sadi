import { CssBaseline, ThemeProvider } from '@mui/material'
import { darktheme } from './utils/theme'
import Routes from './routes/index'
function App() {

  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline/>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
