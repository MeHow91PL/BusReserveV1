import React from 'react';

const Tooth = ({Cwiartka,Numer,Rodzaj, Korona, Korzen,Rozp, onClick}) => {
    return (
        <div className="zab" data-numer={Numer}>
            <div className={`korona ${Korona.ClassName}`}
                data-rozpoznanie={Korona.Rozpoznanie}
                onClick={() => onClick(Cwiartka, Numer, 'Korona',{'Korona':Rozp})}
            >
            </div>

            <div className={`korzen ${Korzen.ClassName}`}
                data-rozpoznanie={Korzen.Rozpoznanie}
                onClick={() => onClick(Cwiartka, Numer, 'Korzen',{'Korzen':Rozp})}
            >
            </div>
        </div>
    );
}

export default Tooth;