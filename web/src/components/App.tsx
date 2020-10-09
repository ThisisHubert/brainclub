import { ThemeProvider } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import { AppTheme } from 'styles'

function App(): ReactElement {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
