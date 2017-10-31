import React from 'react';
import { connect } from 'react-redux';

import Menu from '../dumb/Menu';
import AddBusForm from './AddBusFormContainer';
import { defaultMenu } from '../../consts/menuItems';

class AddBusPage extends React.Component {
    render() {
        console.log("AddBusPage props: ",  this.props);
        return (
            <div>
                <Menu {...defaultMenu} />
                <AddBusForm load2={this.props.load} load={this.props.load} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(AddBusPage);