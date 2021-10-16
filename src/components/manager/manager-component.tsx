import React from 'react';


interface ManagerComponentProps {
    close: ()=> void;
}

export const ManagerComponent: React.FC<ManagerComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Manager IT</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};