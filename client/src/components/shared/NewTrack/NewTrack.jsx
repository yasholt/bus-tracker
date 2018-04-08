import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewTrack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-track-component">
                new track will be here
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(NewTrack);