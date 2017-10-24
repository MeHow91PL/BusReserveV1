import React from 'react';
import {connect} from 'react-redux';

import Menu from '../dumb/Menu';
import AddBusForm from '../dumb/AddBusForm';
import { defaultMenu } from '../../consts/menuItems';

class AddBusPage extends React.Component{
    submit = (values) => {console.log("## Values:", values )}
    
    render(){
        return(
            <div>
                <Menu {...defaultMenu} />
                <AddBusForm onSubmit={this.submit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps)(AddBusPage);