import React from 'react';

interface SubmenuComponentProps {
    close: ()=> void;
    data: any;
    open: ()=> void;
}

export const SubmenuComponent: React.FC<SubmenuComponentProps> = ({close, data, open}) =>{

    return (
        <div>
            <div>{data.title}</div>
            {(data.subItems).map((i:string, index:number)=>{
                return (
                    <div key={index} onClick={open}>{i}</div>
                )
            })}
            <button onClick={close}>Закрыть</button>
        </div>
    )
};