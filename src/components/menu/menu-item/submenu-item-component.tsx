import React from 'react';

interface SubmenuComponentItemProps {
    close: () => void;
    data: any;
}

export const SubmenuItemComponent: React.FC<SubmenuComponentItemProps> = ({close, data}) => {

    return (
        <div>
            {(data).map((i: any, index: number) => {
                return (
                    <div key={index}>
                        <div>{i.title}</div>
                        <div>{i.titleString}</div>
                        <div>{i.description}</div>
                    </div>
                )
            })}
            <button onClick={close}>Закрыть</button>
        </div>
    )
};