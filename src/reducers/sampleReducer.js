export default (state = [], action) => {
    switch (action.type) {
        case 'INIT_MENU':
            return [...state, action.payload ]
        default: return state;
    }
}