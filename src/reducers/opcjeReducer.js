export default(state = {
    show: 'none'
}, action) => {
    switch (action.type) {
        case 'POKA_OPCJE':
            return {show: 'block'}
        case 'UKRYJ_OPCJE':
            return {show: 'none'}
        default:
            return state;
    }
}