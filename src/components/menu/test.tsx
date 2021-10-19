import React from "react";
import styles from "./menu-item/body-item-component.module.css";
import arrowToRight from "../../assets/images/arrowToRight.png";

interface ItemCompomemtProps {
    item: string;
    open: () => void;
    itemType: number;
}

export const ItemCompomemt: React.FC<ItemCompomemtProps> = ({item, open, itemType}) => {

    return (
        <>
            <div className={styles.itemMenuBox}>
                <div className={styles.contentItemMenuBox}>
                    <div>
                        <div onClick={open} className={styles.text}>{item}</div>
                    </div>
                </div>
                <div className={styles.arrowToRightBox}>
                    <img src={arrowToRight} className={styles.arrowToRightIcon} alt={''}/>
                </div>
            </div>
            <div className={styles.footerItemBox}>
                <div onClick={open} className={styles.text}>{item}</div>
            </div>
        </>
    )
};