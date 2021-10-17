import styles from "../menu-component.module.css";
import {BodyItemComponent} from "./body-item-component";
import {FooterItemComponent} from "./footer-item-component";
import React from "react";
import {MenuItem} from "../../../classes/menu-item";

interface MenuItemComponentProps {
    dataBody: MenuItem[];
    call: (i: any)=>void,
    dataFooter: MenuItem[];
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({dataBody,call, dataFooter}) => {

    return (

    <div>
        <div className={styles.body}>
            {dataBody.map((i: any, index: number) => {
                    return (
                        <BodyItemComponent item={i.title}
                                           open={()=>call(i)} key={index}/>
                    )
                }
            )}
        </div>
        <div className={styles.footer}>
            {dataFooter.map((s: any, index: number) => {
                    return (
                        <FooterItemComponent item={s.title} open={()=>call(s)} key={index}/>
                    )
                }
            )}
        </div>
    </div>
    )
};