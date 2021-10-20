import React, {useState} from 'react';
import './App.css'
import {MenuComponent} from "./components/menu/menu-component";

import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";
import localizationData from "./localization/localization";

i18n.use(initReactI18next)
    .init(localizationData);


export function App() {

    const {t} = useTranslation();
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const openMenu = () => {
        setMenuVisible(true)
    };
    const closeMenu = () => {
        setMenuVisible(false)
    };

    return (

        <div>
            {t("Welcome to React")}
            <button onClick={openMenu}>Открыть меню</button>
            {menuVisible ? <MenuComponent close={closeMenu}/> : null}
            <button onClick={()=>{i18n.changeLanguage('ru')}}>Change to russian</button>
        </div>
    );

}

