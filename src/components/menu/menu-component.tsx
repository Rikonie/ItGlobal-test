import React, {useState} from 'react';
import {LanguageComponent} from "../language/language-component";
import {ServicesComponent} from "../services/services-component";
import {ManagerComponent} from "../manager/manager-component";
import {TelecomComponent} from "../telecom/telecom-component";
import {AboutUsComponent} from "../about-us/about-us-component";
import {ContactsComponent} from "../contacts/contacts-component";
import {SearchComponent} from "../search/search-component";
import styles from "./menu-component.module.css";
import ru from "../../assets/images/ru.png"
import cross from "../../assets/images/cross.png"
import arrowToDown from "../../assets/images/arrowToDown.png"
import arrowToRight from "../../assets/images/arrowToRight.png"


class MenuComponentProps {
    close?: ()=> void;
}

export const MenuComponent: React.FC<MenuComponentProps> = ({close}) =>{
    const [languageVisible, setLanguageVisible] = useState<boolean>(false);
    const [servicesVisible, setServicesVisible] = useState<boolean>(false);
    const [mangerVisible, setManagerVisible] = useState<boolean>(false);
    const [telecomVisible, setTelecomVisible] = useState<boolean>(false);
    const [aboutUsVisible, setAboutUsVisible] = useState<boolean>(false);
    const [contactsVisible, setContactsVisible] = useState<boolean>(false);
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    const openLanguage = () => {
        setLanguageVisible(true)
    };
    const openServices = () => {
        setServicesVisible(true)
    };
    const openManager = () => {
        setManagerVisible(true)
    };
    const openTelecom = () => {
        setTelecomVisible(true)
    };
    const openAboutUs = () => {
        setAboutUsVisible(true)
    };
    const openContacts = () => {
        setContactsVisible(true)
    };
    const openSearch = () => {
        setSearchVisible(true)
    };

    const closeLanguage = () => {
        setLanguageVisible(false)
    };
    const closeServices = () => {
        setServicesVisible(false)
    };
    const closeManager = () => {
        setManagerVisible(false)
    };
    const closeTelecom = () => {
        setTelecomVisible(false)
    };
    const closeAboutUs = () => {
        setAboutUsVisible(false)
    };
    const closeContacts = () => {
        setContactsVisible(false)
    };
    const closeSearch = () => {
        setSearchVisible(false)
    };

    return (
        <div className={styles['modal-window']}>
            <div className={styles.header}>
                <div className={styles.iconBoxLanguage}>
                    <img src={ru} className={styles.iconLanguage}/>
                </div>
                <div className={styles.languageBox}>
                    <div onClick={openLanguage} className={styles.text}>RU</div>
                </div>
                <div className={styles.arrowToDownBox}>
                    <img src={arrowToDown} className={styles.arrowToDownIcon}/>
                </div>
                <div onClick={close} className={styles.closeMenuBox}>
                    <img src={cross} className={styles.closeMenuIcon}/>
                </div>
            </div>
            <div>
                <div className={styles.servicesBox}>
                    <div>
                        <div onClick={openServices} className={styles.text}>Services</div>
                    </div>
                    <div className={styles.arrowToRightBox}>
                        <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                    </div>
                </div>
                <div>
                    <div className={styles.managerBox}>
                        <div onClick={openManager} className={styles.text}>Managed IT</div>
                    </div>
                    <div>
                        <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                    </div>
                </div>
                <div>
                    <div className={styles.telecomBox}>
                        <div onClick={openTelecom} className={styles.text}>Telecom Solutions</div>
                    </div>
                    <div>
                        <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                    </div>
                </div>
                <div>
                    <div className={styles.aboutUsBox}>
                        <div onClick={openAboutUs} className={styles.text}>About Us</div>
                    </div>
                    <div>
                        <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                    </div>
                </div>
                <div>
                    <div className={styles.contactsBox}>
                        <div onClick={openContacts} className={styles.text}>Контакты</div>
                    </div>
                    <div>
                        <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                    </div>
                </div>
                    <div>
                        <div className={styles.searchBox}>
                            <div onClick={openSearch} className={styles.text}>Поиск</div>
                        </div>
                        <div>
                            <img src={arrowToRight} className={styles.arrowToRightIcon}/>
                        </div>
                    </div>
            {languageVisible?<LanguageComponent close={closeLanguage}/>:null}
            {servicesVisible?<ServicesComponent close={closeServices}/>:null}
            {mangerVisible?<ManagerComponent close={closeManager}/>:null}
            {telecomVisible?<TelecomComponent close={closeTelecom}/>:null}
            {aboutUsVisible?<AboutUsComponent close={closeAboutUs}/>:null}
            {contactsVisible?<ContactsComponent close={closeContacts}/>:null}
            {searchVisible?<SearchComponent close={closeSearch}/>:null}
            </div>
        </div>
    )
};