import styles from "../menu-component.module.css";
import ru from "../../../assets/images/ru.png";
import arrowToDown from "../../../assets/images/arrowToDown.png";
import cross from "../../../assets/images/cross.png";
import React from "react";

export const HeaderComponent = () => {
return (
    <div>
        <div className={styles.header}>
            <div className={styles.boxInHeader}>
                <div className={styles.iconLanguageBox}>
                    <img src={ru} className={styles.iconLanguage} alt={''}/>
                </div>
                <div className={styles.languageBox}>
                    <div className={styles.text}>Ru</div>
                </div>
                <div className={styles.arrowToDownBox}>
                    <img src={arrowToDown} className={styles.arrowToDownIcon} alt={''}/>
                </div>
            </div>
            <div className={styles.closeMenuBox}>
                <img src={cross} className={styles.closeMenuIcon} alt={''}/>
            </div>
        </div>
    </div>
)
};