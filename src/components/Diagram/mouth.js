import React from 'react';
import Zab from './tooth';

const Mouth = ({AktywneRozpoznanie, Zeby, AddRozpoznanie}) => {
    return (
        <div>
            <div className="szczeka">
                <div className="cw2">
                    <div className="zeby">
                        {Zeby.map(zab => (zab.Ćwiartka === 2
                            ? <Zab
                                    {...zab}
                                    key={`${zab.Ćwiartka}${zab.Numer}`}
                                    Rozp={AktywneRozpoznanie}
                                    onClick={AddRozpoznanie}/>
                            : ""))}
                    </div>
                    <div className="kod">
                        02
                    </div>
                </div>
            </div>
            <div className="zuchwa">
                <div className="cw3">
                    <div className="zeby">
                        {Zeby.map(zab => (zab.Ćwiartka === 3
                            ? <Zab
                                    {...zab}
                                    key={`${zab.Ćwiartka}${zab.Numer}`}
                                    Rozp={AktywneRozpoznanie}
                                    onClick={AddRozpoznanie}/>
                            : ""))}
                    </div>
                    <div className="kod">
                        03
                    </div>
                </div>
                <div className="cw4">
                    <div className="zeby">
                        {Zeby.map(zab => (zab.Ćwiartka === 4
                            ? <Zab
                                    {...zab}
                                    key={`${zab.Ćwiartka}${zab.Numer}`}
                                    Rozp={AktywneRozpoznanie}
                                    onClick={AddRozpoznanie}/>
                            : ""))}
                    </div>
                    <div className="kod">
                        04
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mouth;