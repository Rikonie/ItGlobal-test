import React from 'react';

interface LanguageComponentProps {
    close: ()=> void;
}

export const LanguageComponent: React.FC<LanguageComponentProps> = ({close}) =>{
    return (
        <div>
            <div></div>
            <div>United States</div>
            <div>Netherlands</div>
            <div>Беларусь</div>
            <div>Россия</div>
            <div>Казахстан</div>
            <div>Türkiye</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};