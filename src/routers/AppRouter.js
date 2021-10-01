import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from 'pages/Login'

import { DashboardRoutes } from './DashboardRoutes';

export class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* RUTA LOGIN INICIAL */}
                    <Route 
                    exact 
                    path="/"
                    component= {Login}
                    />
                    {/* RUTA UNA VEZ SE LOGUEA, HOME */}
                    <DashboardRoutes />
                    {/* <Route 
                    exact 
                    path="/home"
                    component= {Home}
                    /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
