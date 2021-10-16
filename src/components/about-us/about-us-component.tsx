import React from 'react';

interface AboutUsComponentProps {
    close: ()=> void;
}

export const AboutUsComponent: React.FC<AboutUsComponentProps> = ({close}) =>{
    return (
        <div>
            <div>About us</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};