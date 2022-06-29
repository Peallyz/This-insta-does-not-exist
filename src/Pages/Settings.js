import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PushNotif from "../Component/Settings/PushNotif";
import Activity from "../Component/Settings/Activity";
import ChangeMDP from "../Component/Settings/ChangeMDP";
import CheckContact from "../Component/Settings/CheckContact";
import Help from "../Component/Settings/Help";
import InstaEmail from "../Component/Settings/InstaEmail";
import MailNotif from "../Component/Settings/MailNotif";
import ModifierProfil from "../Component/Settings/ModifierProfil";
import Security from "../Component/Settings/Security";
import Supervision from "../Component/Settings/Supervision";
import WebApp from "../Component/Settings/WebApp";

const Settings = () => {
    const [navActive, setNavActive] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.state !== null) {
            if (location.state.page === 1) {
                setNavActive(1);
            } else if (location.state.page === 2) {
                setNavActive(2);
            } else if (location.state.page === 3) {
                setNavActive(3);
            } else if (location.state.page === 4) {
                setNavActive(4);
            } else if (location.state.page === 7) {
                setNavActive(7);
            } else if (location.state.page === 8) {
                setNavActive(8);
            } else if (location.state.page === 9) {
                setNavActive(9);
            } else {
                return;
            }
        } else {
            return;
        }
    }, [location.state]);
    return (
        <div className="settings__container">
            <div className="settingsPage">
                <div className="left">
                    <ul>
                        <li
                            className={navActive === 1 && "active"}
                            onClick={() => setNavActive(1)}
                        >
                            Modifier profil
                        </li>
                        <li
                            className={navActive === 2 && "active"}
                            onClick={() => setNavActive(2)}
                        >
                            Changer de mot de passe
                        </li>
                        <li
                            className={navActive === 3 && "active"}
                            onClick={() => setNavActive(3)}
                        >
                            Applications et sites web
                        </li>
                        <li
                            className={navActive === 4 && "active"}
                            onClick={() => setNavActive(4)}
                        >
                            Notifications par e-mail
                        </li>
                        <li
                            className={navActive === 5 && "active"}
                            onClick={() => setNavActive(5)}
                        >
                            Notification push
                        </li>
                        <li
                            className={navActive === 6 && "active"}
                            onClick={() => setNavActive(6)}
                        >
                            Gérer les contacts
                        </li>
                        <li
                            className={navActive === 7 && "active"}
                            onClick={() => setNavActive(7)}
                        >
                            Sécurité et confidentialité
                        </li>
                        <li
                            className={navActive === 8 && "active"}
                            onClick={() => setNavActive(8)}
                        >
                            Supervision
                        </li>
                        <li
                            className={navActive === 9 && "active"}
                            onClick={() => setNavActive(9)}
                        >
                            Activité de connexion
                        </li>
                        <li
                            className={navActive === 10 && "active"}
                            onClick={() => setNavActive(10)}
                        >
                            E-mail d'Instagram
                        </li>
                        <li
                            className={navActive === 11 && "active"}
                            onClick={() => setNavActive(11)}
                        >
                            Aide
                        </li>
                        <li>Passer à un compte professionnel</li>
                    </ul>
                    <div>
                        <h3>Espace Comptes</h3>
                        <p>
                            Réglez les paramètres des expériences partagées
                            entre Instagram, l’application Facebook et
                            Messenger, notamment pour le partage de stories et
                            de publications, ainsi que pour se connecter.
                        </p>
                    </div>
                </div>
                <div
                    className="right"
                    style={{
                        overflow:
                            navActive === 5 || navActive === 7 ? "scroll" : "",
                        overflowX:
                            navActive === 5 || navActive === 7 ? "hidden" : "",
                    }}
                >
                    {navActive === 1 ? (
                        <ModifierProfil />
                    ) : navActive === 2 ? (
                        <ChangeMDP />
                    ) : navActive === 3 ? (
                        <WebApp />
                    ) : navActive === 4 ? (
                        <MailNotif />
                    ) : navActive === 5 ? (
                        <PushNotif />
                    ) : navActive === 6 ? (
                        <CheckContact />
                    ) : navActive === 7 ? (
                        <Security />
                    ) : navActive === 8 ? (
                        <Supervision />
                    ) : navActive === 9 ? (
                        <Activity />
                    ) : navActive === 10 ? (
                        <InstaEmail />
                    ) : (
                        navActive === 11 && <Help />
                    )}
                </div>
            </div>
            <footer className="footer">
                <ul>
                    <li>Meta</li>
                    <li>À propos </li>
                    <li>Blog</li>
                    <li>Emplois </li>
                    <li>Aide </li>
                    <li>API </li>
                    <li>Confidentialité </li>
                    <li>Conditions </li>
                    <li>Compte principaux</li>
                    <li>Hashtags</li>
                    <li>Lieux </li>
                    <li>Emplois </li>
                    <li>Instagram Lite</li>
                    <li>Importation des contacts et non-utilisateur</li>
                </ul>
                <div>
                    <p>Langue</p>

                    <p>© 2022 This insta does not exist par Pierre ANDRE</p>
                </div>
            </footer>
        </div>
    );
};

export default Settings;
