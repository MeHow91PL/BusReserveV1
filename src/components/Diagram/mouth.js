import React from 'react';
import Zab from './tooth';



const Mouth = ({ AktywneRozpoznanie, Zeby, AddRozpoznanie }) => {
    return (
        <div>
            <div className="szczeka">
                <div className="cw1">
                    {Zeby.map(zab => (
                        zab.Ćwiartka === 1 ? <Zab {...zab} key={`${zab.Ćwiartka}${zab.Numer}`} Rozp={AktywneRozpoznanie} onClick={AddRozpoznanie} /> : ""
                    ))}
                </div>
                <div className="cw2">
                {Zeby.map(zab => (
                        zab.Ćwiartka === 2 ? <Zab {...zab} key={`${zab.Ćwiartka}${zab.Numer}`} Rozp={AktywneRozpoznanie} onClick={AddRozpoznanie} /> : ""
                    ))}
                </div>
            </div>
            <div className="zuchwa">
                <div className="cw3">
                    {Zeby.map(zab => (
                        zab.Ćwiartka === 3 ? <Zab {...zab} key={`${zab.Ćwiartka}${zab.Numer}`} Rozp={AktywneRozpoznanie} onClick={AddRozpoznanie} /> : ""
                    ))}
                </div>
                <div className="cw4">
                {Zeby.map(zab => (
                        zab.Ćwiartka === 4 ? <Zab {...zab} key={`${zab.Ćwiartka}${zab.Numer}`} Rozp={AktywneRozpoznanie} onClick={AddRozpoznanie} /> : ""
                    ))}
                </div>
            </div>        
        </div>
    );
}

export default Mouth;