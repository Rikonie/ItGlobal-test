import React from 'react';
import {MenuItem} from "../../../classes/menu-item";

interface SubmenuComponentProps {
    close: () => void;
    data: MenuItem | undefined;
    open: (i: MenuItem) => void;
}

export const SubmenuComponent: React.FC<SubmenuComponentProps> = ({close, data, open}) => {

    return (
        <div>
            <div onClick={close}>{data?.title}</div>
            {(data?.subMenuItems)?.map((i: MenuItem, index: number) => {
                return (
                    <div key={index} onClick={i.subMenuItems && i.subMenuItems.length > 0 ? () => open(i): ()=>{}}>{i.title}</div>
                )
            })}
        </div>
    )
};