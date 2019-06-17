import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => (
    <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to="/demo">Demo</Link>
            </li>
        </ul>

        <hr />
    </>
);

export { Menu };
