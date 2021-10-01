import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Users } from 'pages/Users';
import { Sales } from 'pages/Sales';
import {Products} from 'pages/Products'
import { Footer } from 'components/Footer'
import {Layout} from 'layouts/Layout';

export const DashboardRoutes = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/users" component={ Users }/>
                    <Route exact path="/sales" component={ Sales }/>
                    <Route exact path="/products" component={ Products }/>
                    <Redirect to="/Home"/>
                </Switch>
                <Footer/>
            </Layout>
        </div>     
    )
}