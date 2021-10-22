import React, {useState} from 'react';

import {MenuComponent} from "./components/menu/menu-component";

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import localizationData from "./localization/localization";

i18n.use(initReactI18next)
    .init(localizationData);


export function App() {

    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const openMenu = () => {
        setMenuVisible(true)
    };
    const closeMenu = () => {
        setMenuVisible(false)
    };

    return (
        <div>
            Добрый день!
            <button onClick={openMenu}>Открыть меню</button>
            {menuVisible ? <MenuComponent close={closeMenu}/> : null}
        </div>
    );
}

