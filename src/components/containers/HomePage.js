import React from 'react';
import {connect} from 'react-redux';
let logo = require('../../assets/logo.svg');

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="Logo not found!"/>
                <h1>Home page</h1>
                <p> {this.props.prop} </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.SampleReducer
    }
}

export default connect(mapStateToProps)(HomePage);