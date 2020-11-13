import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/#signin/sign-in';
import Dashboard from '../pages/#home/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/signin" component={SignIn}/>
            </Switch>
        </BrowserRouter>
    );
}