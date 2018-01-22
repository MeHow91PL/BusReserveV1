import { connect } from 'react-redux'
import mouth from '../Diagram/mouth'
import { AddRozpoznanie } from '../../actions/actions';

const mapStateToProps = (state) => ({
    AktywneRozpoznanie: state.Diagram.AktywneRozpoznanie,
    Zeby: state.Diagram.Zeby,
})

const mapDispatchToProps = (dispatch) => {
    return {
        AddRozpoznanie: (cw, nr, pow,rozp) => {
            dispatch(AddRozpoznanie(cw, nr, pow,rozp))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(mouth)
