import React, {Component} from 'react';
import {tracksService} from '../../../services/tracks'

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            amount: 0,
            currentPage: 0,
            selectedRows: []
        };
    }

    componentWillMount() {
        tracksService.getTracksOfUser(0, 1, 9);
    }

    render() {
        return (
            <div className="tracks-component">
                tracks
            </div>
        )
    }
}

export default Tracks;