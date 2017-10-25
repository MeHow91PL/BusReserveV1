import React from 'react';
import { connect } from 'react-redux';

import Menu from '../dumb/Menu';
import AddBusForm from './AddBusFormContainer';
import { defaultMenu } from '../../consts/menuItems';

class AddBusPage extends React.Component {
    render() {
        return (
            <div>
                <Menu {...defaultMenu} />
                <AddBusForm />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop,
    }
}


    export default connect(mapStateToProps)(AddBusPage);