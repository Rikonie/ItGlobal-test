import React from 'react';
import {MenuItem} from "../../../classes/menu-item";
import arrowToRight from "../../../assets/images/arrowToRight.png";
import arrowToLeft from "../../../assets/images/arrowToLeft.png";
import styles from "./submenu-component.module.css";

interface SubmenuComponentProps {
    close: () => void;
    data: MenuItem | undefined;
    open: (i: MenuItem) => void;
}

export const SubmenuComponent: React.FC<SubmenuComponentProps> = ({close, data, open}) => {

    return (
        <>
            <div className={styles.headerSubmenu}>
                    <img src={arrowToLeft} className={styles.arrowIconToLeft} alt={''}/>
                    <div onClick={close} className={styles.textTitle}>{data?.title}</div>
            </div>
            {(data?.subMenuItems)?.map((i: MenuItem, index: number) => {
                return (
                    <div className={styles.contentBox} key={index}>
                        <div className={styles.stringBox}>
                            <div onClick={i.subMenuItems && i.subMenuItems.length > 0 ? () => open(i) : () => {
                            }} className={styles.textString}>{i.title}</div>
                            {(i.subMenuItems && i.subMenuItems.length > 0) ?
                                <img src={arrowToRight} alt={''} className={styles.arrowIconToRight}/> : null}
                        </div>
                    </div>
                )
            })}
        </>
    )
};