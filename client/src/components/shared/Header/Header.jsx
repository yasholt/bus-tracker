import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authModule} from '../../../modules/auth';

class Header extends Component {
    renderContent() {
        const {isUserAdmin, getMatchUrl} = authModule;
        const {auth} = this.props;

        switch (auth) {
            case null:
                return '';
            case false:
                return <a href='/auth'>Login with Google</a>;
            default: {
                const matchUrl = getMatchUrl(auth);
                if (isUserAdmin(auth)) {
                    return (
                        <div>
                            <li key='1'>
                                <Link to={`/${matchUrl}/new-track`}>New track</Link>
                            </li>
                            <li key='2'>
                                <Link to={`/${matchUrl}/tracks`}>My tracks</Link>
                            </li>
                            <li key='3'>
                                <Link to={`/${matchUrl}/new-user`}>New user</Link>
                            </li>
                            <li key='4'>
                                <Link to={`/${matchUrl}/profile`}>Profile</Link>
                            </li>
                            <li key='5'>
                                <Link to={`/${matchUrl}/users`}>Users</Link>
                            </li>
                            <li key='6'>
                                <a href='/auth/logout'>Logout</a>
                            </li>
                        </div>
                    );
                } else {
                    return (
                        <div>
                            <li key='1'>
                                <Link to={`/${matchUrl}/new-track`}>New track</Link>
                            </li>
                            <li key='2'>
                                <Link to={`/${matchUrl}/tracks`}>My tracks</Link>
                            </li>
                            <li key='3'>
                                <Link to={`/${matchUrl}/profile`}>Profile</Link>
                            </li>
                            <li key='4'>
                                <a href='/auth/logout'>Logout</a>
                            </li>
                        </div>
                    );
                }
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

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);
