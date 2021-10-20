import styles from "./body-item-component.module.css";
import arrowToRight from "../../../assets/images/arrowToRight.png";
import React from "react";

interface BodyItemComponentProps {
    item: string;
    open: () => void;
}

export const BodyItemComponent: React.FC<BodyItemComponentProps> = ({item, open}) => {

    return (
        <div className={styles.itemMenuBox}>
            <div className={styles.contentItemMenuBox} onClick={open}>
                <div className={styles.text}>{item}</div>
                <img src={arrowToRight} className={styles.arrowToRightIcon} alt={''}/>
            </div>
        </div>
    )
};