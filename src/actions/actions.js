export function InitializeMenu(menuItems) {
    return ({
        type: 'INIT_MENU',
        payload: menuItems
    })
}

export const InitializeAddBusForm = (data) => {
    console.log("Action fired!!");
    console.log('data', data);
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
export const SetNewRozpoznanie = (rozp) => {
    console.log("Ustawiono rozpoznanie:" , rozp.nazwa);
    return ({
        type: 'DIAG_SET_ROZP_ZEBA',
        payload: rozp
    })
}