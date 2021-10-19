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
                    <img src={arrowToDown} className={styles.arrowToDownIcon} alt={''}/>
                </div>
                <img src={cross} className={styles.closeMenuIcon} alt={''} onClick={close}/>
            </div>
    </div>
)
};