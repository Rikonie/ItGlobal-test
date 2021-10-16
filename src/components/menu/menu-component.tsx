import React, {useState} from 'react';
import {SubmenuComponent} from "../services/submenu-component";
import styles from "./menu-component.module.css";
import {MenuItemComponent} from "./menu-item/menu-item-component";
import {HeaderComponent} from "./menu-item/header-component";


interface MenuComponentProps {
    close: () => void;
}

export const MenuComponent: React.FC<MenuComponentProps> = ({close}) => {
    const [activeMenu, setActiveMenu] = useState<number>(1);
    const [submenuContent, setSubmenuContent] = useState<any | undefined>(1);

    const bodyItem = [
        {title: 'Services', subItems: ['Облачные вычисления',
                'Выделенные серверы', 'Платформенные сервисы',
                'Информационная безопасность']
        },
        {title: 'Managed IT', subItems: ['Добрый день, Вы попали на страницу Managed IT']},
        {title: 'Telecom Solutions', subItems: ['Добрый день, Вы попали на страницу Telecom Solutions']},
        {title: 'About Us', subItems: ['Добрый день, Вы попали на страницуAbout Us']}];

    const footerItem = [{title: 'Контакты', subItems: ['Добрый день, Вы попали на страницу Контакты']},
        {title: 'Поиск', subItems: ['Добрый день, Вы попали на страницу Поиск']}];

    const MenuComponentFunc = (i: any) => {
        setActiveMenu(2);
        setSubmenuContent(i);
    };

    const getActiveMenu = (activeMenu: number) => {
        switch (activeMenu) {
            case 1:
                return (
                    <MenuItemComponent call={MenuComponentFunc} dataBody={bodyItem} dataFooter={footerItem}/>
                );
            case 2:
                return (
                    <SubmenuComponent data={submenuContent} close={() => {
                        setActiveMenu(1);
                    }}/>
                );
            default:
                return (
                    <MenuItemComponent call={MenuComponentFunc} dataBody={bodyItem} dataFooter={footerItem}/>
                );
        }
    };

    return (
        <div className={styles['modal-window']}>
            <div className={styles.modalWindowContent}>
                <div>
                    <HeaderComponent/>
                </div>
                <div>
                    {getActiveMenu(activeMenu)}
                </div>
            </div>
        </div>
    )
};