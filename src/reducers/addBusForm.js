export default (state= {data:{}}, action) =>
{
    switch (action.type) {
        case 'INIT_ADD_BUS_FORM':
        // return {...state,
        //     nazwa: action.nazwa,
        //     rzedy: action.rzedy,
        //     liczbaMiejsc: action.liczbaMiejsc
        // };
        
        return {...state, data: {
            nazwa:'Nowy bus',
            rzedy: 10,
            liczbaMiejsc: 120
        }
        };
        default: return state;
    }
}