import React from 'react';
import { connect } from 'react-redux';
import { SetRozpoznanie } from '../../actions/actions';
import Rozp from '../../consts/rozpoznania';


class Rozpoznania extends React.Component {
    render() {
        const { AktywneRozpoznanie, RozpoznanieChanged } = this.props;
        return (
            <div>
                <div className="rozpoznania">
                    <div className="rozp-kafelek brak"
                        onClick={() => RozpoznanieChanged(Rozp.Brak)}>B</div>
                    <div className="rozp-kafelek prochnica"
                        onClick={() => RozpoznanieChanged(Rozp.Prochnica)}>P</div>
                    <div className="rozp-kafelek kamien"
                        onClick={() => RozpoznanieChanged(Rozp.Kamien)}>K</div>
                </div>
                <div className="aktw-rozp-label">
                    Wybrane rozpoznanie: <span style={{ 'color': AktywneRozpoznanie.Color }}>{AktywneRozpoznanie.Nazwa}</span>

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