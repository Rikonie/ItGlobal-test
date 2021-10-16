import React, {useState} from 'react';
import {SubmenuComponent} from "../services/submenu-component";
import styles from "./menu-component.module.css";
import {MenuItemComponent} from "./menu-item/menu-item-component";
import {HeaderComponent} from "./menu-item/header-component";
import {SubmenuItemComponent} from "./menu-item/submenu-item-component";
import {bodyItem, footerItem} from "../../classes/menu-item";
import {submenuItem} from "../../classes/submenu-item";


interface MenuComponentProps {
    close: () => void;
}

export const MenuComponent: React.FC<MenuComponentProps> = ({close}) => {
    const [activeMenu, setActiveMenu] = useState<number>(1);
    const [submenuContent, setSubmenuContent] = useState<any | undefined>(1);

    const MenuComponentFunc = (i: any) => {
        setActiveMenu(2);
        setSubmenuContent(i);
    };

    const openSubmenu = ()=> {
        setActiveMenu(3)
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
                    }} open={openSubmenu}/>
                );
            case 3:
                return (
                  <SubmenuItemComponent data={submenuItem} close={() => {
                      setActiveMenu(2)
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