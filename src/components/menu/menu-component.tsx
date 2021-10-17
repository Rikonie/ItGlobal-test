import React, {useState} from 'react';
import {SubmenuComponent} from "./menu-item/submenu-component";
import styles from "./menu-component.module.css";
import {MenuItemComponent} from "./menu-item/menu-item-component";
import {HeaderComponent} from "./menu-item/header-component";
import {SubmenuItemComponent} from "./menu-item/submenu-item-component";
import {bodyItem, footerItem, MenuItem, SubmenuItem} from "../../classes/menu-item";

interface MenuComponentProps {
    close: () => void;
}

export const MenuComponent: React.FC<MenuComponentProps> = ({close}) => {
    const [activeMenu, setActiveMenu] = useState<number>(1);
    const [submenuContent, setSubmenuContent] = useState<MenuItem | undefined>(undefined);
    const [submenuItemContent, setSubMenuItemContent] = useState<SubmenuItem | undefined>(undefined);

    const MenuComponentFunc = (i: MenuItem) => {
        setActiveMenu(2);
        setSubmenuContent(i);
    };

    const openSubmenu = (i:SubmenuItem)=> {
        setActiveMenu(3);
        setSubMenuItemContent(i);
        console.log("openSubmenu",i)
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
                    }} open={openSubmenu} />
                );
            case 3:
                return (
                  <SubmenuItemComponent data={submenuItemContent} close={() => {
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