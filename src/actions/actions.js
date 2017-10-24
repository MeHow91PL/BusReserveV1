export function InitializeMenu(menuItems){
    return({
        type: 'INIT_MENU',
        payload: menuItems
    })
}