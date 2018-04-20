import React from 'react';
import CreateMouth from '../containers/CreateMouth';
import Rozpoznania from './Rozpoznania';
import OpcjeBtn from './opcjeBtn';
import OpcjeDialog from './opcjeDialog';
import {connect} from 'react-redux';
import {ActionCreators} from 'redux-undo';
import {HotKeys} from 'react-hotkeys';
import {DiagramContextMenu, ZabContextMenu} from '../containers/ContextMenu';


const keyMap = {
    'cofnijRozp': 'ctrl+z',
    'redoRozp': 'ctrl+y'
};



const DiagramPage = ({undoRozp, redoRozp, canUndo, canRedo}) => {
    const undo = () => canUndo && undoRozp();
    const redo = () => canRedo && redoRozp();

    const handlers = {
        'cofnijRozp': undo,
        'redoRozp': redo
    };

    return (
        <div>
            <HotKeys keyMap={keyMap} handlers={handlers}>
                <div className="topbar">
                    <Rozpoznania/>
                    <OpcjeBtn/>
                </div>
                <CreateMouth/>
                <DiagramContextMenu/>
                <ZabContextMenu/>
                <OpcjeDialog />
            </HotKeys>
            {
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    canUndo: state.Diagram.past.length > 0,
    canRedo: state.Diagram.future.length > 0
})

const mapDispatchToProps = {
    undoRozp: ActionCreators.undo,
    redoRozp: ActionCreators.redo
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagramPage);