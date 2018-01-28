import React from 'react';
import { ContextMenu, Item, Separator, IconFont } from 'react-contexify';

function onClick(targetNode, ref, data) {
    // targetNode refer to the html node on which the menu is triggered
    console.log(targetNode);
    //ref will be the mounted instance of the wrapped component
    //If you wrap more than one component, ref will be an array of ref
    console.log(ref);
    // Additionnal data props passed down to the `Item`
    console.log(data);
}

// create your menu first
export const DiagramContextMenu = ({ Cwiartki }) => (
    <ContextMenu id='menu_id'>
        {/* <Item leftIcon={<IconFont className="fa fa-plus" />} onClick={onClick}>
            Add
        </Item>
        <Item leftIcon={<IconFont className="material-icons">remove_circle</IconFont>} onClick={onClick}>
            Remove
        </Item>
        <Item><IconFont className="fa fa-scissors" />cut</Item>
        <Separator/>
        <Item disabled>
            Paste
        </Item> */}
        <Item onClick={onClick}>Text</Item>
    </ContextMenu>
);

export const ZabContextMenu = () => (
    <ContextMenu id='zabConMenu'>
        <Item onClick={onClick}>
            Anuluj rozpoznanie
        </Item>
        <Item disabled>
            Zab mleczny
        </Item>
        <Separator />

    </ContextMenu>
);