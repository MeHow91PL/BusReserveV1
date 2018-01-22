const Diagram = {
    AktywneRozpoznanie: "",
    Zeby: [
        { Ćwiartka: 1, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 1, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 1, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 1, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 1, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 1, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 2, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 3, Numer: 7, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 1, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 2, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 3, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 4, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 5, Rodzaj: "Staly", Korona: "", Korzen: "" },
        { Ćwiartka: 4, Numer: 6, Rodzaj: "Staly", Korona: "", Korzen: "" }
    ]
}


export default (state = Diagram, action) => {
    switch (action.type) {
        case 'DIAG_SET_ROZP':
            return {
                ...state,
                AktywneRozpoznanie: {
                    Nazwa: action.payload.nazwa,
                    ClassName: action.payload.ClassName
                }
            }
        case 'DIAG_ADD_ROZP':
        console.log(...action.rozp);
        
            return {
                ...state, Zeby: state.Zeby.map(
                    zab => ( 
                        zab.Ćwiartka === action.cw && zab.Numer === action.nr ?
                         {...zab, ...action.rozp} : 
                         zab
                    ))
            }
        default: return state;
    }
}