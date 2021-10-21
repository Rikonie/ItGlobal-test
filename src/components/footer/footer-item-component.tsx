import styles from "./footer-item-component.module.css";
import React from "react";
import {useTranslation} from "react-i18next";

interface FooterItemComponentProps {
    item: string;
    open: ()=> void;
}

export const FooterItemComponent: React.FC<FooterItemComponentProps> = ({item, open}) => {
    const {t} = useTranslation();
    return (
        <div className={styles.footerItemBox} onClick={open}>
            <div className={styles.text}>{t(item)}</div>
        </div>
    )
};

