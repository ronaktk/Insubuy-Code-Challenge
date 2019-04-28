import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './components/Form'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
