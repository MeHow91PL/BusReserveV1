import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({displayName, link}) => {
    return (
        <li>
            <Link to={link}>  {displayName} </Link>
        </li>
    )
}

export default MenuItem;