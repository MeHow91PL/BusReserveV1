export default (state= {data:{}}, action) =>
{
    switch (action.type) {
        case 'INIT_ADD_BUS_FORM':
            return {data: action.payload }
        default: 
            return state;
    }
}