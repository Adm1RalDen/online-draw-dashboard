import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'
import { themes } from 'styles/themes'

import { store } from 'store'

import { App } from './app'

const container = document.getElementById('root')
const root = createRoot(container as HTMLDivElement)

root.render(
  <BrowserRouter>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
)
