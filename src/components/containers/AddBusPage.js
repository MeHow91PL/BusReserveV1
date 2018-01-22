import React from 'react';
import Menu from '../dumb/Menu';
import AddBusForm from '../AddBusForm';
import BusPreview from '../BusPreview';

import { defaultMenu } from '../../consts/menuItems';


const AddBusPage = props =>
{
    return(
        <div>
            <Menu {...defaultMenu} />
            <AddBusForm />
            <BusPreview />
        </div>
    )
}



export default AddBusPage;