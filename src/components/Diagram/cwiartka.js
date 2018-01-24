import React from 'react'
import Zab from './tooth'


function Cwiartka({NumerCwiartki,Zeby,AktywneRozpoznanie,AddRozpoznanie}) {
    return (
        <div>
        <div className="cw1">
        <div className="zeby">
            {Zeby.map(zab => (zab.Ćwiartka === NumerCwiartki
                ? <Zab
                        {...zab}
                        key={`${zab.Ćwiartka}${zab.Numer}`}
                        Rozp={AktywneRozpoznanie}
                        onClick={AddRozpoznanie}/>
                : ""))}
        </div>
        <div className="kod">
            01
        </div>
    </div>
        </div>
    )
}

export default Cwiartka
