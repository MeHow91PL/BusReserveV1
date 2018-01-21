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
    console.log("State", state.AddBusForm.data)
    return {
        initialValues: state.AddBusForm.data
    }
}

AddBusFormContainer = connect(mapStateToProps,{load: InitializeAddBusForm})(AddBusFormContainer)

export default AddBusFormContainer;