import React from 'react';
import { connect } from 'react-redux';

import Menu from '../dumb/Menu';
import SyncValidationForm from '../SyncValidationForm';
import FieldValidationForm from '../FieldValidationForm';
import SubmitValidationForm from '../SubmitValidationForm';
import { defaultMenu } from '../../consts/menuItems';

class AddBusPage extends React.Component {
    render() {
        console.log("AddBusPage props: ", this.props);
        return (
            <div>
                <Menu {...defaultMenu} />
                <div className="bordered">Sync validation form
                 <SyncValidationForm />
                </div>
                <div className="bordered"> Field validation form
                 <FieldValidationForm />
                </div>
                <div className="bordered"> Submit validation form
                 <SubmitValidationForm />
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(AddBusPage);