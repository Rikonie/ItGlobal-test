import React from 'react';

interface DedicatedServersComponentProps {
    close: ()=> void;
}

export const DedicatedServersComponent: React.FC<DedicatedServersComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Выделенные серверы</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};