import React from 'react';

interface CloudComputingComponentProps {
    close: ()=> void;
}

export const CloudComputingComponent: React.FC<CloudComputingComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Cloud consulting</div>
            <div>Relational database services for MySQL, PostgreSQL, and SQL server.</div>
            <div>Cloud infrastructure analytics</div>
            <div>Health-specific solutions to enhance the patient experience.</div>
            <div>Hybrid Cloud</div>
            <div>Data storage, AI, and analytics solutions for government agencies.</div>
            <div>Hybrid Cloud</div>
            <div>Data storage, AI, and analytics solutions for government agencies.</div>
            <div>Multicloud</div>
            <div>Relational database services for MySQL, PostgreSQL, and SQL server.</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};