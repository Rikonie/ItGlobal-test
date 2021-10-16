import React from 'react';

interface PlatformServicesComponentProps {
    close: ()=> void;
}

export const PlatformServicesComponent: React.FC<PlatformServicesComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Платформенные сервисы</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};