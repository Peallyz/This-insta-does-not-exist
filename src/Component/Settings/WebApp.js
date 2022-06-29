import React, { useState } from "react";

const WebApp = () => {
    const [currentText, setCurrentText] = useState(1);
    return (
        <div className="webApp">
            <h3>Applications et sites web</h3>
            <ul>
                <li
                    onClick={() => setCurrentText(1)}
                    className={currentText === 1 ? "active" : ""}
                >
                    Actif
                </li>
                <li
                    onClick={() => setCurrentText(2)}
                    className={currentText === 2 ? "active" : ""}
                >
                    Expiré
                </li>
                <li
                    onClick={() => setCurrentText(3)}
                    className={currentText === 3 ? "active" : ""}
                >
                    Supprimé
                </li>
            </ul>
            <p>
                {currentText === 1
                    ? "Il s’agit des applications et des sites web que vous avez associés à votre compte Instagram. Ils peuvent accéder aux informations non publiques que vous choisissez de partager avec eux."
                    : currentText === 2
                    ? "Il s’agit des applications et des sites web que vous avez associés à votre compte Instagram, mais que vous n’avez peut-être pas utilisés au cours des 90 derniers jours. Ils ne peuvent plus accéder à vos informations non publiques, mais ils détiennent peut-être toujours les informations que vous avez partagées quand ils étaient actifs. Les informations « non publiques » sont les informations auxquelles une application peut accéder uniquement si vous choisissez de les partager quand vous vous connectez avec votre compte Instagram (comme votre adresse e-mail)."
                    : currentText === 3 &&
                      "Il s’agit des applications et des sites web qui ne sont plus associés à votre compte Instagram. Ils ne peuvent plus accéder à vos informations non publiques, mais ils détiennent peut-être toujours les informations que vous avez partagées quand ils étaient actifs. Les informations « non publiques » sont les informations auxquelles une application peut accéder uniquement si vous choisissez de les partager quand vous vous connectez avec votre compte Instagram (comme votre adresse e-mail). Vous pouvez demander à une application de supprimer vos informations. Pour ce faire, consultez sa politique de confidentialité afin d’obtenir les détails et coordonnées. Si vous contactez une application, elle peut avoir besoin de votre identifiant utilisateur."}
            </p>
            <p>
                Aucune application ayant été supprimée n’a eu accès à votre
                compte Instagram.
            </p>
        </div>
    );
};

export default WebApp;
