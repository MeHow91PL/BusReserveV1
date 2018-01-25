import { connect } from 'react-redux'
import cwiartka from '../Diagram/cwiartka'
import { AddRozpoznanieZab, AddRozpoznanieCw } from '../../actions/actions'

const mapStateToProps = (state, ownProps) =>
 ({
    AktywneRozpoznanie: state.Diagram.AktywneRozpoznanie,
    Zeby: state.Diagram.Zeby,
})

const mapDispatchToProps = dispatch => {
    return {
        AddRozpoznanieZab: (cw, nr, pow, rozp) => {
            dispatch(AddRozpoznanieZab(cw, nr, pow, rozp))
        },
        AddRozpoznanieCw: (cw, rozp) => {
            dispatch(AddRozpoznanieCw(cw, rozp))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cwiartka)
