import styles from "./header-component.module.css";
import ru from "../../../assets/images/ru.png";
import arrowToDown from "../../../assets/images/arrowToDown.png";
import cross from "../../../assets/images/cross.png";
import React from "react";

interface HeaderComponentProps {
    close: ()=> void;
}

export const HeaderComponent:React.FC<HeaderComponentProps>= ({close}) => {
return (
    <div>
        <div className={styles.header}>
                <div className={styles.boxLanguage}>
                    <img src={ru} className={styles.iconLanguage} alt={''}/>
                    <div className={styles.text}>Ru</div>
                    <div className={styles.a}>
                        <div className={styles.countryText}>Страна</div>
                        <div className={styles.languageText}>United States</div>
                        <div className={styles.languageText}>Netherlands</div>
                        <div className={styles.languageText}>Беларусь</div>
                        <div className={styles.languageText}>Россия</div>
                        <div className={styles.languageText}>Казахстан</div>
                        <div className={styles.languageText}>Türkiye</div>
                    </div>
                    <img src={arrowToDown} className={styles.arrowToDownIcon} alt={''}/>
                </div>
                <img src={cross} className={styles.closeMenuIcon} alt={''} onClick={close}/>
            </div>
    </div>
)
};