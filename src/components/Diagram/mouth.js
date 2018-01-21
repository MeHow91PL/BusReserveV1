import React from 'react';
import Zab from './tooth';
import {connect} from 'react-redux';
import {SetNewRozpoznanie} from './../../actions/actions';

const Mouth = ({AktywneRozpoznanie}) => {
    return (
        <div>
            {/* <div className="szczeka">
                <Zab />
                <Zab />
                <Zab />
                <Zab />
            </div> */}
            <div className="zuchwa">
                <Zab  />
                <Zab />
                <Zab />
                <Zab />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        AktywneRozpoznanie: state.DiagramReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToothCilck: (rozp) => {
            dispatch(SetNewRozpoznanie(rozp))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mouth);