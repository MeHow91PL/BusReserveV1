import React from 'react';
import { connect } from 'react-redux';
import { SetRozpoznanie } from '../../actions/actions';

class Rozpoznania extends React.Component {
    render() {
        const  {AktywneRozpoznanie, RozpoznanieChanged} = this.props;
        return (
            <div className="rozpoznania">
                <div className="rozp-kafelek prochnica"
                 onClick={()=>RozpoznanieChanged({nazwa: 'Próchnica',ClassName: 'prochnica'})}>P</div>
                 <div className="rozp-kafelek kamien"
                 onClick={()=>RozpoznanieChanged({nazwa: 'Kamień',ClassName: 'kamien'})}>K</div>
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
        AktywneRozpoznanie: state.Diagram.AktywneRozpoznanie
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        RozpoznanieChanged: (rozp) => {
            dispatch(SetRozpoznanie(rozp))
        }
    }
}

Rozpoznania = connect(mapStateToProps, mapDispatchToProps)(Rozpoznania);

export default Rozpoznania;