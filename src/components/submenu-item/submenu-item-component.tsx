import React from 'react';
import {MenuItem} from "../../classes/menu-item";
import styles from "./submenu-item-component.module.css";
import arrowToLeft from "../../assets/images/arrow-to-left.png";
import line from "../../assets/images/line.png";
import {useTranslation} from "react-i18next";

interface SubmenuComponentItemProps {
    close: () => void;
    data: MenuItem | undefined;
}

export const SubmenuItemComponent: React.FC<SubmenuComponentItemProps> = ({close, data}) => {
    const {t} = useTranslation();
    return (
        <>
            <div onClick={close} className={styles.headerSubmenu}>
                <img src={arrowToLeft} className={styles.arrowToLeftIcon} alt={''}/>
                {data?.title?<div className={styles.textTitle}>{t(data?.title)}</div>:null}
            </div>
            <img src={line} alt={''} className={styles.lineIcon}/>
            <div className={styles.scroll}>
            {(data?.subMenuItems)?.map((i: MenuItem, index: number) => {
                return (
                    <div key={index}>
                        <div className={styles.textTitleContent}>{t(i.title)}</div>
                        {i.description?<div className={styles.textContent}>{t(i.description)}</div>:null}
                    </div>
                )
            })}
            </div>
        </>
    )
};