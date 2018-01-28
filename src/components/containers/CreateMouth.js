import { connect } from 'react-redux'
import mouth from '../Diagram/mouth'


const mapStateToProps = (state) => ({
    AktywneRozpoznanie: state.Diagram.present.AktywneRozpoznanie,
    Cwiartki: state.Diagram.present.Cwiartki
})

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(mouth)
