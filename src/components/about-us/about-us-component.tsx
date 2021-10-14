import React from 'react';



class AboutUsComponentProps {
    close?: ()=> void;
}

export const AboutUsComponent: React.FC<AboutUsComponentProps> = ({close}) =>{
    return (
        <div>
            <div>About us</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};