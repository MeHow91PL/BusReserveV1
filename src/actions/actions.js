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