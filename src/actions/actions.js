export function InitializeMenu(menuItems) {
    return ({
        type: 'INIT_MENU',
        payload: menuItems
    })
}

export const InitializeAddBusForm = (data) => {
    console.log("Action fired!!");
    console.log('-- Action: InitializeAddBusForm: data', data);
    return ({
        type: 'INIT_ADD_BUS_FORM',
        payload: data
    })
}

export const SetRozpoznanie = (rozp) => {
    console.log(`Zmiana rozpoznania na ${rozp.nazwa}`)
    return ({
        type: 'DIAG_SET_ROZP',
        payload: rozp
    })
}
export const AddRozpoznanieZab = (cw, nr, pow,rozp) => {
    console.log("Dodano rozpoznanie:" , cw, nr, pow,rozp);
    return ({
        type: 'DIAG_ADD_ROZP_ZAB',
        cw, nr, pow,rozp
    })
}

export const AddRozpoznanieCw = (cw,rozp) => {
    console.log("Dodano rozpoznanie:" , cw,rozp);
    return ({
        type: 'DIAG_ADD_ROZP_CW',
        cw,rozp
    })
}

export const AnulujRozp = (oldState,newState) => {
    console.log("Dodano zmianę:" , oldState,newState);
    return ({
        type: 'DIAG_CANCEL_ROZP',
        oldState,newState
    })
}