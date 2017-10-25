import React from 'react';
import { connect } from 'react-redux';
import AddBusForm from '../dumb/AddBusForm';
import { InitializeAddBusForm } from '../../actions/actions';

class AddBusFormContainer extends React.Component {
    submit = (values) => { console.log("## Values:", values) }
    render() {
        console.log(this.props.initialValues);
        return (
            <AddBusForm onSubmit={this.submit} data={this.props.initialValues}/>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.addBusForm
    }
}

AddBusFormContainer = connect(mapStateToProps,{load: InitializeAddBusForm})(AddBusFormContainer)

export default AddBusFormContainer;