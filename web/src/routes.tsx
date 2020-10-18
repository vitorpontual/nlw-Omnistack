import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import DonePage from './pages/Done'

import LoginPage from './pages/restrict/login'
import ForgetPage from './pages/restrict/forgetpassword'
import RedefinitionPage from './pages/restrict/redefinition'

function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/app' component={OrphanagesMap} />

            <Route path='/orphanages/create' component={CreateOrphanage} />
            <Route path='/orphanages/done' component ={DonePage} />
            <Route path='/orphanages/:id' component={Orphanage} />

            <Route path='/login-happy' component={LoginPage} /> 
            <Route path='/forget-password' component={ForgetPage} />
            <Route path='/redefinition' component={RedefinitionPage} /> 
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;