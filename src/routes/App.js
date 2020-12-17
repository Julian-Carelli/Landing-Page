import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../containers/LandingPage'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL} component={Home}></Route>
        </Switch>        
    </BrowserRouter>
)

export default App