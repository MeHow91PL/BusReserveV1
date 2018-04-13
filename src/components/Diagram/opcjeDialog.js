import { connect } from 'react-redux'
import React from 'react'
import { ukryjOpcje } from '../../actions/actions'

const OpcjeDialog = ({show,hideDialog}) =>
{
    console.log(show);
    
    return(
        <div style={{display: show }} className='modalDialog' 
        onClick={hideDialog} >
            <div onClick={(e)=>{e.stopPropagation();}}>
                Div
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    show: state.Opcje.show
})

const mapDispatchToProps = {
    hideDialog: ukryjOpcje
}

export default connect(mapStateToProps, mapDispatchToProps)(OpcjeDialog)
