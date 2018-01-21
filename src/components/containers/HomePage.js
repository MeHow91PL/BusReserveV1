import React from 'react';
import {connect} from 'react-redux';
import Menu from '../dumb/Menu';
// import {InitializeMenu} from '../../actions/actions';
import { defaultMenu } from '../../consts/menuItems';

let logo = require('../../assets/zab.svg');

class HomePage extends React.Component{
    componentWillMount(){
    }

    render(){
    const { menuItems }  = this.props;
    console.log("render", menuItems);
    
        return(
            <div>
                <img className="logo" src={logo} alt="Logo not found!"/>
                <h1>Home page</h1>
                <Menu {...defaultMenu}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);