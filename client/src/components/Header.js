import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return <a href="/auth">Login with Google</a>;
            default:
                return [
                    <li key="1">Hello {this.props.auth.userFirstName}</li>,
                    <li key="2">
                        <a href="/auth/logout">Logout</a>
                    </li>
                ];
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
