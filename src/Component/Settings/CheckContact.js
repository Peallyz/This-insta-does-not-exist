import React from "react";

const CheckContact = () => {
    return (
        <div className="checkContact">
            <h3>Gérer les contacts</h3>
            <p>
                Les personnes répertoriées ici sont des contacts que vous avez
                importés sur Instagram. Pour supprimer vos contacts
                synchronisés, appuyez sur Tout supprimer. Vos contacts seront
                réimportés lors de la prochaine synchronisation d’Instagram,
                sauf si vous accédez aux paramètres de votre appareil et
                désactivez l’accès aux contacts.
            </p>
            <p>
                Vous êtes la seule personne à voir vos contacts mais Instagram
                utilise les infos que vous avez importées concernant vos
                contacts pour vous faire des suggestions d’amis à vous et à
                d’autres et pour améliorer l’expérience de tous.
            </p>

            <div>
                <p>0 contact synchronisés</p>
                <p>Tout supprimer</p>
            </div>
        </div>
    );
};

export default CheckContact;
