import React from 'react';
import CreateMouth from '../containers/CreateMouth';
import Rozpoznania from './Rozpoznania';

const DiagramPage = props => {
    return (
        <div>
            <Rozpoznania />
            <CreateMouth />
        </div>

    );

}

export default DiagramPage;