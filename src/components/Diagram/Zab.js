import { connect } from 'react-redux'
import tooth from './tooth'
import { AnulujRozp } from '../../actions/actions';


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    AnulujRozp: AnulujRozp
}

export default connect(mapStateToProps, mapDispatchToProps)(tooth)
