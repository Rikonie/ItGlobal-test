import React from 'react';

interface SubmenuComponentProps {
    close: ()=> void;
    data: any;
}

export const SubmenuComponent: React.FC<SubmenuComponentProps> = ({close, data}) =>{
    return (
        <div>
            <div>{data.title}</div>
            {(data.subItems).map((i:string, index:number)=>{
                return (
                    <div key={index}>{i}</div>
                )
            })}
            <button onClick={close}>Закрыть</button>
        </div>
    )
};