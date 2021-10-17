import React from 'react';
import {MenuItem} from "../../../classes/menu-item";

interface SubmenuComponentItemProps {
    close: () => void;
    data: MenuItem | undefined;
}

export const SubmenuItemComponent: React.FC<SubmenuComponentItemProps> = ({close, data}) => {
    return (
        <div>
            <div onClick={close}>{data?.title}</div>
            {(data?.subMenuItems)?.map((i: MenuItem , index: number) => {
                return (
                    <div key={index}>
                        <div>{i.title}</div>
                        <div>{i.description}</div>
                    </div>
                )
            })}
        </div>
    )
};