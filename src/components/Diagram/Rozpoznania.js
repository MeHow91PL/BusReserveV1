import React from 'react';
import { connect } from 'react-redux';
import { SetRozpoznanie } from '../../actions/actions';

class Rozpoznania extends React.Component {
    render() {
        const  {AktywneRozpoznanie, RozpoznanieChanged} = this.props;
        console.log("props", this.props);
        console.log("AktywneRozpoznanie", AktywneRozpoznanie);
        return (
            <div className="rozpoznania">
                <div className="rozp-kafelek prochnica"
                 onClick={()=>RozpoznanieChanged({nazwa: 'Próchnica',fill: '#ff1c1c'})}>P</div>
                 <div className="rozp-kafelek kamien"
                 onClick={()=>RozpoznanieChanged({nazwa: 'Kamień',fill: '#9e9e9e'})}>K</div>
                 <div>
                     Wybrane rozpoznanie:
                     {AktywneRozpoznanie.Nazwa}
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AktywneRozpoznanie: state.DiagramReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(SetRozpoznanie);
    return {
        RozpoznanieChanged: (rozp) => {
            dispatch(SetRozpoznanie(rozp))
        }
    }
}

Rozpoznania = connect(mapStateToProps, mapDispatchToProps)(Rozpoznania);

export default Rozpoznania;