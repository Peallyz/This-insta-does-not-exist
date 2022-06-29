import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MainProfil = () => {
    const [navActive, setNavActive] = useState(1);
    const [modalIsActive, setModalIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state !== null) {
            if (location.state.page === 1) {
                setNavActive(1);
            } else if (location.state.page === 3) {
                setNavActive(3);
            } else {
                return;
            }
        } else {
            return;
        }
    }, [location.state]);

    return (
        <div className="main__profil">
            <div
                className={
                    modalIsActive
                        ? "modal active settings_modal"
                        : "modal settings_modal"
                }
            >
                <div className="modal__box settings_modal--box">
                    {" "}
                    <ul>
                        <Link to={"/settings"} state={{ page: 2 }}>
                            <li>Changer de mot de passe</li>
                        </Link>
                        <Link to={"/settings"}>
                            <li>Code QR</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 3 }}>
                            <li>Applications et site web</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 4 }}>
                            <li>Notifications</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 7 }}>
                            <li>Confidentialité et sécurité</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 8 }}>
                            <li>Supervisions</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 9 }}>
                            <li>Activité de connexion</li>
                        </Link>
                        <Link to={"/settings"} state={{ page: 1 }}>
                            <li>E-mails d'Instagram</li>
                        </Link>
                        <Link to={"/settings"}>
                            <li>Signaler un problème</li>
                        </Link>
                        <Link to={"/settings"}>
                            <li>Intégrer</li>
                        </Link>

                        <li onClick={() => setModalIsActive(false)}>
                            Déconnection
                        </li>

                        <li onClick={() => setModalIsActive(false)}>Annuler</li>
                    </ul>
                </div>
            </div>
            <div className="main__profil--header">
                <img src="./assets/peally.jpg" alt="profil Pierre ANDRE" />
                <div className="main__profil--info">
                    <div className="title">
                        <p>andre_pierre</p>
                        <Link to={"/settings"} state={{ page: 1 }}>
                            <button>Modifier profil</button>
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#292929"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            onClick={() => setModalIsActive(true)}
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        </svg>
                    </div>
                    <div className="analytics">
                        <p>
                            <strong>0</strong> publication
                        </p>
                        <p>
                            <strong>0</strong> abonné
                        </p>
                        <p>
                            <strong>230</strong> abonnements
                        </p>
                    </div>
                    <div className="bio">
                        <p>
                            <strong>Pierre ANDRE</strong>
                        </p>
                        <p>
                            La premiere fois c’est une erreur, la seconde fois
                            c’est une bétise.
                        </p>
                    </div>
                </div>
            </div>
            <div className="main__profil--nav">
                <ul>
                    <li
                        className={navActive === 1 ? "active" : ""}
                        onClick={() => setNavActive(1)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid-dots"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#8e8e8e"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="5" cy="5" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="19" cy="5" r="1" />
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="19" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="19" cy="19" r="1" />
                        </svg>{" "}
                        <span>PUBLICATIONS</span>
                    </li>
                    <li
                        className={navActive === 2 ? "active" : ""}
                        onClick={() => setNavActive(2)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-player-play"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#8e8e8e"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 4v16l13 -8z" />
                        </svg>{" "}
                        <span>VIDEOS</span>
                    </li>
                    <li
                        className={navActive === 3 ? "active" : ""}
                        onClick={() => setNavActive(3)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-bookmark"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#8e8e8e"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>{" "}
                        <span>ENREGISTREMENTS</span>
                    </li>
                    <li
                        className={navActive === 4 ? "active" : ""}
                        onClick={() => setNavActive(4)}
                    >
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user-circle"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#8e8e8e"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        <span>{"IDENTIFIE(E)"}</span>
                    </li>
                </ul>
            </div>
            <div className="main__profil--content">
                {navActive === 1
                    ? "Vous n'avez pas encore de publications"
                    : navActive === 2
                    ? "Aucune vidéos n'est enregistrée"
                    : navActive === 3
                    ? "Vous n'avez aucune publication enregistré"
                    : navActive === 4 &&
                      "Vous n'êtes identifié(e) sur aucune publication"}
            </div>
        </div>
    );
};

export default MainProfil;
