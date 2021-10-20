import React from 'react';
import {MenuItem} from "../../../classes/menu-item";
import styles from "./submenu-item-component.module.css";
import arrowToLeft from "../../../assets/images/arrowToLeft.png";
import line from "../../../assets/images/line.png";

interface SubmenuComponentItemProps {
    close: () => void;
    data: MenuItem | undefined;
}

export const SubmenuItemComponent: React.FC<SubmenuComponentItemProps> = ({close, data}) => {
    return (
        <>
            <div onClick={close} className={styles.headerSubmenu}>
                <img src={arrowToLeft} className={styles.arrowToLeftIcon} alt={''}/>
                <div className={styles.textTitle}>{data?.title}</div>
            </div>
            <img src={line} alt={''} className={styles.lineIcon}/>
            <div className={styles.scroll}>
            {(data?.subMenuItems)?.map((i: MenuItem, index: number) => {
                return (
                    <div key={index}>
                        <div className={styles.textTitleContent}>{i.title}</div>
                        <div className={styles.textContent}>{i.description}</div>
                    </div>
                )
            })}
            </div>
        </>
    )
};