import React from 'react';
import {MenuItem, SubmenuItem} from "../../classes/menu-item";

interface SubmenuComponentProps {
    close: () => void;
    data: MenuItem | undefined;
    open: (i: any) => void;
}

export const SubmenuComponent: React.FC<SubmenuComponentProps> = ({close, data, open}) => {

    return (
        <div>
            <div>{data?.title}</div>
            {(data?.subItems)?.map((i: SubmenuItem, index: number) => {
                return (
                    <div key={index} onClick={i.information && i.information.length > 0 ? () => open(i): ()=>{}}>{i.title}</div>
                )
            })}
            <button onClick={close}>Закрыть</button>
        </div>
    )
};