import React from 'react';


//You need to use a tr as a render tag otherwise your browser console will bleed !

const Tooth = ({Cwiartka,Numer, Korona, Korzen,Rozp, onClick, AnulujRozp}) => {
    return (
        <div className="zab" data-numer={Numer}>
                <div className={`korona ${Korona.ClassName}` }
                data-rozpoznanie={Korona.Rozpoznanie}
                onClick={() => onClick(Cwiartka, Numer, 'Korona',{'Korona':Rozp})}
            >{Numer}
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