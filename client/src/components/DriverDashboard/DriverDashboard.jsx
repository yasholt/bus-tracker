import React, {Component} from 'react';
import Tracks from '../shared/Tracks/Tracks';

class DriverDashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="driver-dashboard-component">
                driver
                <Tracks/>
            </div>
        )
    }
}

export default DriverDashboard;