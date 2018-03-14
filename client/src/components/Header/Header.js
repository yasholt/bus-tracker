import React, { Component } from 'react';
import { connect } from 'react-redux';
import links from './links';

class Header extends Component {
    renderContent() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <a href="/auth">Login with Google</a>;
            default:
                if (this.props.auth.userType) {
                    return [
                        links.newTrack,
                        links.tracks,
                        links.newUser,
                        links.users,
                        links.profile,
                        links.logout
                    ];
                } else {
                    return [
                        links.newTrack,
                        links.tracks,
                        links.profile,
                        links.logout
                    ];
                }
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left">
                        BUS TRACKER
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
