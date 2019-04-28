import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './components/Form'
import Results from './components/Results'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form}/>
        <Route path="/results" component={Results}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
