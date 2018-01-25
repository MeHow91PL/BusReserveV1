import React from 'react';
import Cwiartka from '../containers/Cwiartka';

const Mouth = ({ AktywneRozpoznanie, Cwiartki }) => {
    return (
        <div>
        
        <div className="szczeka">
            {Cwiartki.map(cw => (
                 cw.Umiejscowienie === '01' ? <Cwiartka key={cw.Numer} {...cw} /> : ''
            ))}
        </div>
        <div className="zuchwa">
        {Cwiartki.map(cw => (
                 cw.Umiejscowienie === '02' ? <Cwiartka key={cw.Numer} {...cw} /> : ''
            ))}
        </div>
        </div>
    )
}

export default Mouth;




// const Mouth = ({AktywneRozpoznanie, Zeby, AddRozpoznanie}) => {
//     return (
//         <div>
//             <div className="szczeka">
//                 <div className="cw2">
//                     <div className="zeby">
//                         {Zeby.map(zab => (zab.Cwiartka === 2
//                             ? <Zab
//                                     {...zab}
//                                     key={`${zab.Cwiartka}${zab.Numer}`}
//                                     Rozp={AktywneRozpoznanie}
//                                     onClick={AddRozpoznanie}/>
//                             : ""))}
//                     </div>
//                     <div className="kod">
//                         02
//                     </div>
//                 </div>
//             </div>
//             <div className="zuchwa">
//                 <div className="cw3">
//                     <div className="zeby">
//                         {Zeby.map(zab => (zab.Cwiartka === 3
//                             ? <Zab
//                                     {...zab}
//                                     key={`${zab.Cwiartka}${zab.Numer}`}
//                                     Rozp={AktywneRozpoznanie}
//                                     onClick={AddRozpoznanie}/>
//                             : ""))}
//                     </div>
//                     <div className="kod">
//                         03
//                     </div>
//                 </div>
//                 <div className="cw4">
//                     <div className="zeby">
//                         {Zeby.map(zab => (zab.Cwiartka === 4
//                             ? <Zab
//                                     {...zab}
//                                     key={`${zab.Cwiartka}${zab.Numer}`}
//                                     Rozp={AktywneRozpoznanie}
//                                     onClick={AddRozpoznanie}/>
//                             : ""))}
//                     </div>
//                     <div className="kod">
//                         04
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default Mouth;