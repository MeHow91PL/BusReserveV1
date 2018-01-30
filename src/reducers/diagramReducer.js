import undoable, { includeAction ,excludeAction } from 'redux-undo'
import Rozp from '../consts/rozpoznania';

const Diagram = {
    AktywneRozpoznanie: Rozp.Brak,
    Zeby: [
        { Cwiartka: 10, Numer: 11, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 12, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 13, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 14, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 15, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 16, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 17, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 10, Numer: 18, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 21, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 22, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 23, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 24, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 25, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 26, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 27, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 20, Numer: 28, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 31, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 32, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 33, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 34, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 35, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 36, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 37, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 30, Numer: 38, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 41, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 42, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 43, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 44, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 45, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 46, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 47, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Cwiartka: 40, Numer: 48, Rodzaj: "Staly", Korona: "", Korzen: "" }
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