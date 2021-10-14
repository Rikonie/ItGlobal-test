import React from 'react';

class SearchComponentProps {
    close?: ()=> void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Search</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};