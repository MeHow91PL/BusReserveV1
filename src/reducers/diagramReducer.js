export default (state = {}, action) => {
    switch (action.type) {
        case 'DIAG_SET_ROZP':
            return {
                ...state,
                Nazwa: action.payload.nazwa,
                fill: action.payload.fill
            }
            case 'DIAG_SET_ROZP_ZEBA':
            return {
                ...state
            }
        default: return state;
    }
}