import undoable, { includeAction ,excludeAction } from 'redux-undo'

const Diagram = {
    AktywneRozpoznanie: "",
    Zeby: [
        { Cwiartka: 10, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 7, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 8, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 7, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 8, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 7, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 8, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 7, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 8, Rodzaj: "Staly", Korona: "", Korzen: "" }
    ],
    Cwiartki: [
        { Numer: 10, Umiejscowienie: '01' },
        { Numer: 20, Umiejscowienie: '01' },
        { Numer: 30, Umiejscowienie: '02' },
        { Numer: 40, Umiejscowienie: '02' }
    ],
    ListaZmian: []
}



const diagramReucer = (state = Diagram, action) => {
    switch (action.type) {
        case 'DIAG_SET_ROZP':
            return {
                ...state,
                AktywneRozpoznanie: action.payload
            }
        case 'DIAG_ADD_ROZP_ZAB':
            return {
                ...state, Zeby: state.Zeby.map(
                    zab => (
                        zab.Cwiartka === action.cw && zab.Numer === action.nr ?
                            { ...zab, ...action.rozp } :
                            zab
                    ))
                    
            }
        case 'DIAG_ADD_ROZP_CW':
            return {
                ...state, Zeby: state.Zeby.map(
                    zab => (
                        zab.Cwiartka === action.cw ?
                            { ...zab, Korona: action.rozp, Korzen: action.rozp } :
                            zab
                    ))
            }
        default: return state;
    }
}

const undoableTodos = undoable(diagramReucer,{ 
    filter: excludeAction(['DIAG_SET_ROZP'])

})
  
export default undoableTodos;