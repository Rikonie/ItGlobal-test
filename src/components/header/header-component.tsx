import styles from "./header-component.module.css";
import ru from "../../assets/images/ru.png";
import arrowToDown from "../../assets/images/arrow-to-down.png";
import cross from "../../assets/images/cross.png";
import React, {useState} from "react";
import usa from "../../assets/images/usa.png";
import netherlands from "../../assets/images/netherlands.png";
import belarus from "../../assets/images/belarus.png";
import kz from "../../assets/images/kz.png";
import tr from "../../assets/images/tr.png";
import ruInModal from "../../assets/images/ru-in-modal.png";
import i18n from "i18next";
import checkMark from "../../assets/images/check-mark.png";

interface HeaderComponentProps {
    close: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({close}) => {

    const languages = [
        {lan: 'United States', picture: usa, lng: 'en'},
        {lan: 'Netherlands', picture: netherlands, lng: 'nt'},
        {lan: 'Беларусь', picture: belarus, lng: 'bl'},
        {lan: 'Россия', picture: ruInModal, lng: 'ru'},
        {lan: 'Казахстан', picture: kz, lng: 'kz'},
        {lan: 'Türkiye', picture: tr, lng: 'tr'}];

    const [languageMenuVisible, setLanguageMenuVisible] = useState<boolean>(false);

    const openMenu = (state:boolean) => {
        switch (state) {
            case true:
                return setLanguageMenuVisible(false);
            case false:
                return setLanguageMenuVisible(true);
        }
    };

    const closeMenuAndChangeLanguage = (i: string) => {
        setLanguageMenuVisible(false);
        i18n.changeLanguage(i)
    };

    const iconLanguage = (language: string) => {
        switch (language) {
            case "en":
                return usa;
            case "nt":
                return netherlands;
            case "bl":
                return belarus;
            case "ru":
                return ru;
            case "kz":
                return kz;
            case "tr":
                return tr;
            default:
                return usa;
        }
    };

    return (

        <div>
            <div className={styles.header}>
                <div className={languageMenuVisible? styles.boxLanguageActive: styles.boxLanguage} onClick={()=>openMenu(languageMenuVisible)}>
                    <img src={iconLanguage(i18n.language)} className={styles.iconLanguage} alt={''}/>
                    <div className={styles.text}>{i18n.language}</div>
                    <img src={arrowToDown} className={styles.arrowToDownIcon} alt={''}/>
                </div>
                <img src={cross} className={styles.closeMenuIcon} alt={''} onClick={close}/>
            </div>
            {languageMenuVisible ?
                <div className={styles.modal}>
                    <div className={styles.countryText}>Страна</div>
                    {languages.map((i, index) => {
                        return (<div key={index}>
                            {((i18n.language) === (i.lng)) ?
                                <div className={styles.modalContentChange}
                                    onClick={() => closeMenuAndChangeLanguage(i.lng)} key={index}>
                                    <img src={i.picture} className={styles.iconInModal} alt={''}/>
                                    <div className={styles.languageText}>{i.lan}</div>
                                    <img src={checkMark} className={styles.checkIcon} alt={''}/>
                                </div> : <div className={styles.modalContent}
                                    onClick={() => closeMenuAndChangeLanguage(i.lng)} key={index}>
                                    <img src={i.picture} className={styles.iconInModal} alt={''}/>
                                    <div className={styles.languageText}>{i.lan}</div>
                                </div>}
                        </div>)
                    })}
                </div> : null}
        </div>
    )
};