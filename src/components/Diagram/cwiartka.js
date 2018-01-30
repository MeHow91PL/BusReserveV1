import React from 'react'
import Zab from './Zab'

import { menuProvider } from 'react-contexify'

const ZabCtx = menuProvider('zabConMenu')(Zab)

function Cwiartka(
    {Umiejscowienie, Numer, Zeby, AktywneRozpoznanie, AddRozpoznanieCw,AddRozpoznanieZab }) 
    {
    return (
        <div>
            <div className={`cw${Numer}`}>
                <div className="zeby">
                    {Zeby.map(zab => (zab.Cwiartka === Numer
                        ? <ZabCtx
                            {...zab}
                            key={`${zab.Cwiartka}${zab.Numer}`}
                            Rozp={AktywneRozpoznanie}
                            onClick={AddRozpoznanieZab} />
                        : ""
                        ))}
                </div>
                <div className="kod" onClick={() => AddRozpoznanieCw(Numer,AktywneRozpoznanie)}>
                    {Numer}
                </div>
            </div>
        </div>
    )
}

export default Cwiartka
