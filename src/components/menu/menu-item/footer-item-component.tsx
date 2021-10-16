import styles from "./footer-item-component.module.css";
import React from "react";

interface FooterItemComponentProps {
    item: string;
    open: ()=> void;
}

export const FooterItemComponent: React.FC<FooterItemComponentProps> = ({item, open}) => {

    return (
        <div className={styles.footerItemBox}>
            <div onClick={open} className={styles.text}>{item}</div>
        </div>
    )
};

