import React from 'react';


interface ContactsComponentProps {
    close: ()=> void;
}

export const ContactsComponent: React.FC<ContactsComponentProps> = ({close}) =>{
    return (
        <div>
            <div>Contacts</div>
            <button onClick={close}>Закрыть</button>
        </div>
    )
};