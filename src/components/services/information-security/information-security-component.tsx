import React from 'react';

interface InformationSecurityComponentProps {
    close: ()=> void;
}

export const InformationSecurityComponent: React.FC<InformationSecurityComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Информационная безопасность</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};