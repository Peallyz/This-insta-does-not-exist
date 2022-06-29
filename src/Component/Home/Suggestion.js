import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Suggestion = () => {
    const users = useSelector((state) => state.user.data);
    return (
        <div className="suggestion">
            <div className="suggestion__header">
                <Link to={"/profil"}>
                    <div>
                        <img src="./assets/peally.jpg" alt="profil" />
                        <div className="suggestion__header--name">
                            <p>andre_pierre</p>
                            <p>Pierre ANDRE</p>
                        </div>
                    </div>
                </Link>
                <p className="suggestion__link">Basculer</p>
            </div>
            <div className="suggestion__title">
                <h4>Suggestions pour vous</h4>
                <p>Voir tout</p>
            </div>
            <div className="suggestion__follow">
                <ul>
                    {users.slice(0, 5).map((user, index) => (
                        <li key={Math.round(Math.random() * 9992149999)}>
                            <div>
                                <img src={user.picture.large} alt="profil" />
                                <div className="suggestion__header--name">
                                    <p>
                                        {user.name.last}_{user.name.first}
                                    </p>
                                    <p>Débute sur pas Instagram</p>
                                </div>
                            </div>
                            <p className="suggestion__link">S'abonner</p>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">
                <ul>
                    <li>À propos </li>
                    <span> . </span>
                    <li>Aide </li>
                    <span> . </span>
                    <li>Presse </li>
                    <span> . </span>
                    <li>API </li>
                    <span> . </span>
                    <li>Emplois </li>
                    <span> . </span>
                    <li>Confidentialité </li>
                    <span> . </span>
                    <li>Conditions </li>
                    <span> . </span>
                    <li>Lieux </li>
                    <span> . </span>
                    <li>Langue</li>
                </ul>

                <p>© 2022 THIS INSTA DOES NOT EXIST PAR PIERRE ANDRE</p>
            </footer>
        </div>
    );
};

export default Suggestion;
