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
            <div onClick={close} className={styles.headerSubmenu}>
                <img src={arrowToLeft} className={styles.arrowIconToLeft} alt={''}/>
                <div className={styles.textTitle}>{data?.title}</div>
            </div>
            {(data?.subMenuItems)?.map((i: MenuItem, index: number) => {
                return (
                    <div className={styles.contentBox} key={index}>
                        {(i.subMenuItems && i.subMenuItems.length > 0) ? <div className={styles.stringBox}
                                                                              onClick={() => open(i)}>
                            <div className={styles.textString}>{i.title}</div>
                            <img src={arrowToRight} alt={''} className={styles.arrowIconToRight}/>
                        </div> : <div className={styles.stringBoxSecond}>
                            <div className={styles.textString}>{i.title}</div>
                        </div>}
                    </div>
                )
            })}
        </>
    )
};