import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        // const newTrack = <Link to="/new-track">New track</Link>;
        // const newUser = <Link to="/new-user">My tracks</Link>;

        // const myTracks = <Link to="/my-tracks">My tracks</Link>;

        // if (this.props.auth && this.props.auth.userType) {
        //     return [
        //         <Link to="/new-track">New track</Link>,
        //         <Link to="/tracks">New track</Link>,
        //         <Link to="/new-user">New track</Link>,
        //         <Link to="/profile">New track</Link>,
        //         <Link to="/users">New track</Link>
        //     ];
        // } else if (this.props.auth && !this.props.auth.userType) {
        //     return [
        //         <Link path="/new-track">New track</Link>,
        //         <Link path="/tracks">New track</Link>
        //     ];
        // }

        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <a href="/auth">Login with Google</a>;
            default:
                if (this.props.auth.userType) {
                    return [
                        <li>
                            <Link key="1" to="/new-track">
                                New track
                            </Link>
                        </li>,
                        <li>
                            <Link key="2" to="/tracks">
                                My tracks
                            </Link>
                        </li>,
                        <li>
                            <Link key="3" to="/new-user">
                                New user
                            </Link>
                        </li>,
                        <li>
                            <Link key="4" to="/profile">
                                My profile
                            </Link>
                        </li>,
                        <li>
                            <Link key="5" to="/users">
                                Users
                            </Link>
                        </li>,
                        <li>
                            {' '}
                            <a key="6" href="/auth/logout">
                                Logout
                            </a>
                        </li>
                    ];
                } else {
                    return [
                        <li>
                            <Link key="1" to="/new-track">
                                New track
                            </Link>
                        </li>,
                        <li>
                            <Link key="2" to="/tracks">
                                My tracks
                            </Link>
                        </li>,
                        <li>
                            <Link key="4" to="/profile">
                                My profile
                            </Link>
                        </li>,
                        <li>
                            <a key="3" href="/auth/logout">
                                Logout
                            </a>
                        </li>
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
