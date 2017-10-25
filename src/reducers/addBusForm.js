export default (state= {nazwa:'',rzedy:'',liczbaMiejsc:''}, action) =>
{
    switch (action.type) {
        case 'INIT_ADD_BUS_FORM':
            return {...state,
                nazwa: action.nazwa,
                rzedy: action.rzedy,
                liczbaMiejsc: action.liczbaMiejsc
            };
        default: return state;
    }
}