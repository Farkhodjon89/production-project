import { render } from 'react-dom'
import App from './app/App'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

render(
  <ThemeProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>,
  document.getElementById('root'),
)
