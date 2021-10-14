import React, {useState} from 'react';
import {CloudComputingComponent} from "./cloud-computing/cloud-computing-component";
import {DedicatedServersComponent} from "./dedicated-servers/dedicated-servers-component";
import {InformationSecurityComponent} from "./information-security/information-security-component";
import {PlatformServicesComponent} from "./platform-services/platform-services-component";

class ServicesComponentProps {
    close?: ()=> void;
}

export const ServicesComponent: React.FC<ServicesComponentProps> = ({close}) =>{

    const [computingVisible, setComputingVisible] = useState<boolean>(false);
    const [dedicatedVisible, setDedicatedVisible] = useState<boolean>(false);
    const [platformVisible, setPlatformVisible] = useState<boolean>(false);
    const [securityVisible, setSecurityVisible] = useState<boolean>(false);

    const openComputing = () => {
        setComputingVisible(true)
    };
    const openDedicated = () => {
        setDedicatedVisible(true)
    };
    const openPlatform = () => {
        setPlatformVisible(true)
    };
    const openSecurity = () => {
        setSecurityVisible(true)
    };

    const closeComputing = () => {
        setComputingVisible(false)
    };
    const closeDedicated = () => {
        setDedicatedVisible(false)
    };
    const closePlatform = () => {
        setPlatformVisible(false)
    };
    const closeSecurity = () => {
        setSecurityVisible(false)
    };

    return (
        <div>
                <div onClick={openComputing}>Облачные вычисления</div>
                <div onClick={openDedicated}>Выделенные серверы</div>
                <div onClick={openPlatform}>Платформенные сервисы</div>
                <div onClick={openSecurity}>Информационная безопасность</div>
            <button onClick={close}>Закрыть</button>
            {computingVisible?<CloudComputingComponent close={closeComputing}/>:null}
            {dedicatedVisible?<DedicatedServersComponent close={closeDedicated}/>:null}
            {platformVisible?<PlatformServicesComponent close={closePlatform}/>:null}
            {securityVisible?<InformationSecurityComponent close={closeSecurity}/>:null}
        </div>
    )
};