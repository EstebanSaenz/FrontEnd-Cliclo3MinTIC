import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../components/Home';
import { Header } from '../components/Header';
import { Users } from '../components/Users';

export const DashboardRoutes = () => {
    return (
        <div>
            <Header/>

            <div className="container mt-2">
                    <Switch>
                        <Route exact path="/home" component={ Home }/>
                        <Route exact path="/users" component={ Users }/>
                        <Redirect to="/Home"/>
                    </Switch>
            </div>
        </div>     
    )
}