import React from 'react';

const Tooth = ({Ćwiartka,Numer,Rodzaj, Korona, Korzen,Rozp, onClick}) => {
    return (
        <div className="zab" data-numer={Numer}>
            <div className={`korona ${Korona.ClassName}`}
                data-rozpoznanie={Korona.Rozpoznanie}
                onClick={() => onClick(Ćwiartka, Numer, 'Korona',{'Korona':Rozp})}
            >
            {Numer}
            </div>

            <div className={`korzen ${Korzen.ClassName}`}
                data-rozpoznanie={Korzen.Rozpoznanie}
                onClick={() => onClick(Ćwiartka, Numer, 'Korzen',{'Korzen':Rozp})}
            >
            {Ćwiartka}
            </div>
        </div>
    );
}

export default Tooth;