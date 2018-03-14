import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import NewTrack from './NewTrack';
import NewUser from './NewUser';
import Profile from './Profile';
import Tracks from './Tracks';
import Users from './Users';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    routesAccess() {
        if (this.props.auth && this.props.auth.userType) {
            return [
                <Route path="/new-track" component={NewTrack} />,
                <Route path="/tracks" component={Tracks} />,
                <Route path="/new-user" component={NewUser} />,
                <Route path="/profile" component={Profile} />,
                <Route path="/users" component={Users} />
            ];
        } else if (this.props.auth && !this.props.auth.userType) {
            return [
                <Route path="/profile" component={Profile} />,
                <Route path="/new-track" component={NewTrack} />,
                <Route path="/tracks" component={Tracks} />
            ];
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div>{this.routesAccess()}</div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(App);
