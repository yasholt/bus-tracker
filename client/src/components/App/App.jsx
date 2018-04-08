import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Header from '../shared/Header/Header';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import {authModule} from '../../modules/auth';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.routesAccess = this.routesAccess.bind(this);
    }

    componentWillMount() {
        this.props.fetchUser();
    }

    routesAccess() {
        const {isUserAuthenticated, isUserAdmin} = authModule;
        const {auth} = this.props;
        return (
            <Switch>
                <Route exact path='/' render={() => (
                    isUserAuthenticated(auth) ? (
                        isUserAdmin(auth) ? (
                            <Redirect to='/admin'/>
                        ) : (
                            <Redirect to='/driver'/>
                        )
                    ) : (
                        <Redirect to='/'/>
                    )
                )}/>
                <Route path='/admin' render={() => (
                    isUserAuthenticated(auth) ? (
                        isUserAdmin(auth) ? (
                            <AdminDashboard/>
                        ) : (
                            <Redirect to='/driver'/>
                        )
                    ) : (
                        <Redirect to='/'/>
                    )
                )}/>
                <Route path='/driver' render={() => (
                    isUserAuthenticated(auth) ? (
                        isUserAdmin(auth) ? (
                            <Redirect to='/admin'/>
                        ) : (
                            <DriverDashboard/>
                        )
                    ) : (
                        <Redirect to='/'/>
                    )
                )}/>
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        )
    }

    render() {
        const {routesAccess} = this;
        return (
            <BrowserRouter>
                <div className="router-component">
                    <Header/>
                    {routesAccess()}
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, actions)(App);
