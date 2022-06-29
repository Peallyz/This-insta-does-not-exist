import React, { useState } from "react";

const InstaEmail = () => {
    const [currentText, setCurrentText] = useState(1);
    return (
        <div className="instaMail">
            <h3>Email d'Instagram</h3>
            <ul>
                <li
                    onClick={() => setCurrentText(1)}
                    className={currentText === 1 ? "active" : ""}
                >
                    Sécurité
                </li>
                <li
                    onClick={() => setCurrentText(2)}
                    className={currentText === 2 ? "active" : ""}
                >
                    Autre
                </li>
            </ul>
            <p>
                {currentText === 1
                    ? "Les e-mails qu’Instagram vous a envoyés au cours des 14 derniers jours concernant la sécurité et la connexion apparaîtront ici. Vous pouvez utiliser cette liste pour déterminer quels e-mails sont authentiques et lesquels sont faux. "
                    : currentText === 2 &&
                      "Les autres e-mails qu’Instagram vous a envoyés au cours des 14 derniers jours qui ne concernent ni la sécurité ni la connexion apparaîtront ici. Vous pouvez utiliser cette liste pour déterminer quels e-mails sont authentiques et lesquels sont faux. "}
                <span>En savoir plus.</span>
            </p>
        </div>
    );
};

export default InstaEmail;
