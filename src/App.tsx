import React, {useState} from 'react';
import './App.css'
import {MenuComponent} from "./components/menu/menu-component";


export function App() {

  const [menuVisible, setMenuVisible]= useState<boolean>(false);
  const openMenu = () => {
    setMenuVisible(true)
  };
  const closeMenu =() => {
    setMenuVisible(false)
  };

  return (

    <div>
      Добрый день
      <button onClick={openMenu}>Открыть меню</button>
      {menuVisible?<MenuComponent close={closeMenu}/>:null}
    </div>
  );

}

