import React from 'react';
import { Link } from 'react-router-dom';

export default {
    newTrack: (
        <li key="1">
            <Link to="/new-track">New track</Link>
        </li>
    ),
    tracks: (
        <li key="2">
            <Link to="/tracks">My tracks</Link>
        </li>
    ),
    newUser: (
        <li key="3">
            <Link to="/new-user">New user</Link>
        </li>
    ),
    profile: (
        <li key="4">
            <Link to="/profile">Profile</Link>
        </li>
    ),
    users: (
        <li key="5">
            <Link to="/users">Users</Link>
        </li>
    ),
    logout: (
        <li key="6">
            <a href="/auth/logout">Logout</a>
        </li>
    )
};
