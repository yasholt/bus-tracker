import React, {Component} from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {authModule}  from '../../modules/auth';
import NewTrack from '../shared/NewTrack/NewTrack';
import Tracks from '../shared/Tracks/Tracks';

class AdminDashboard extends Component {
    render() {
        const matchUrl = authModule.getMatchUrl(this.props.auth);

        return(
            <div className="admin-dashboard-component">
                <Switch>
                    <Route path={`/${matchUrl}/tracks`} component={Tracks}/>
                    <Route path={`/${matchUrl}/new-track`} component={NewTrack}/>
                    <Route path='*' render={() => (
                        <Redirect to={`/${matchUrl}/tracks`}/>
                    )}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default withRouter(connect(mapStateToProps)(AdminDashboard));