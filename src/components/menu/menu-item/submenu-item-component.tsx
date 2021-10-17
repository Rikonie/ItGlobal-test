import React from 'react';
import {InformationSubmenu, SubmenuItem} from "../../../classes/menu-item";

interface SubmenuComponentItemProps {
    close: () => void;
    data: SubmenuItem | undefined;
}

export const SubmenuItemComponent: React.FC<SubmenuComponentItemProps> = ({close, data}) => {
    return (
        <div>
            <div>{data?.title}</div>
            {(data?.information)?.map((i: InformationSubmenu , index: number) => {
                return (
                    <div key={index}>
                        <div>{i.titleString}</div>
                        <div>{i.description}</div>
                    </div>
                )
            })}
            <button onClick={close}>Закрыть</button>
        </div>
    )
};