import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import NewTrack from './NewTrack';
import NewUser from './NewUser';
import Profile from './Profile';
import Tracks from './Tracks';
import Users from './Users';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Route path="/new-track" component={NewTrack} />
                        <Route path="/new-user" component={NewUser} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/tracks" component={Tracks} />
                        <Route path="/users" component={Users} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
