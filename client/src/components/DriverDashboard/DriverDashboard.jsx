import React, {Component} from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import Tracks from '../shared/Tracks/Tracks';
import NewTrack from '../shared/NewTrack/NewTrack';
import {authModule}  from '../../modules/auth';
import {connect} from 'react-redux';

class DriverDashboard extends Component {
    render() {
        const matchUrl = authModule.getMatchUrl(this.props.auth);

        return(
            <div className="driver-dashboard-component">
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

export default withRouter(connect(mapStateToProps)(DriverDashboard));