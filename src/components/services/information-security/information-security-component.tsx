import React from 'react';

class InformationSecurityComponentProps {
    close?: ()=> void;
}

export const InformationSecurityComponent: React.FC<InformationSecurityComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Информационная безопасность</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};