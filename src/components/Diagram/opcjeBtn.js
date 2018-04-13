import {connect} from 'react-redux';
import React from 'react';
import OknoOpcji from './OknoOpcji';
import { pokazOpcje } from '../../actions/actions'


const OpcjeBtn = ({poka}) => {
    return (
        <div>
            <div className="opcje-btn btn" onClick={poka}>O</div>
            <OknoOpcji />
        </div>

    )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
    poka: pokazOpcje
}

export default connect(mapStateToProps, mapDispatchToProps)(OpcjeBtn)
