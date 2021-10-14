import React from 'react';

class TelecomComponentProps {
    close?: ()=> void;
}

export const TelecomComponent: React.FC<TelecomComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Telecom</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};