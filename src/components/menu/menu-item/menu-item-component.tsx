import styles from "./menu-item-component.module.css";
import {BodyItemComponent} from "./body-item-component";
import {FooterItemComponent} from "./footer-item-component";
import React from "react";
import {MenuItem} from "../../../classes/menu-item";

interface MenuItemComponentProps {
    dataBody: MenuItem [];
    call: (i: MenuItem) => void,
    dataFooter: MenuItem[];
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({dataBody, call, dataFooter}) => {

    return (
        <div className={styles.menuItem}>
                    <div className={styles.body}>
                        {dataBody.map((i: MenuItem, index: number) => {
                                return (
                                    <BodyItemComponent item={i.title}
                                                       open={() => call(i)} key={index}/>
                                )
                            }
                        )}
                </div>
                    <div className={styles.footer}>
                        {dataFooter.map((s: MenuItem, index: number) => {
                                return (
                                    <FooterItemComponent item={s.title} open={() => call(s)} key={index}/>
                                )
                            }
                        )}
                </div>
        </div>
    )
};