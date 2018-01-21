import React from 'react';
// import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({type, items}) => {
        return(
        <ul className={type}>
            { items.map((item, i) => (
                <MenuItem key={i} {...item} />
            )) }
        </ul>
    )
}

Menu.propTypes = {
}

export default Menu;