import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon'
import Home from './pages/Home'

import Navbars from './components/navbar'

function Routes() {
    return(
        <BrowserRouter>
            <>
                <Navbars />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/logon" component={Logon} />
                
                </Switch>
                
            </>
        </BrowserRouter>

    )

}

export default Routes