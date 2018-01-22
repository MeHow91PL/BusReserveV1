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
export const AddRozpoznanie = (cw, nr, pow,rozp) => {
    console.log("Dodano rozpoznanie:" , cw, nr, pow,rozp);
    return ({
        type: 'DIAG_ADD_ROZP',
        cw, nr, pow,rozp
    })
}