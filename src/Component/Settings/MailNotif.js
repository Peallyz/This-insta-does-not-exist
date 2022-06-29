import React from "react";

const MailNotif = () => {
    return (
        <div className="mailNotif">
            <h3>S'inscrire à :</h3>
            <div className="container">
                <div className="inp">
                    <input type="checkbox" checked />
                    <p>E-mails de commentaires</p>
                </div>
                <p>Donnez votre avis sur Instagram</p>
            </div>
            <div className="container">
                <div className="inp">
                    <input type="checkbox" checked />
                    <p>E-mails de rappel</p>
                </div>
                <p>
                    Recevez des notifications que vous pourriez avoir manquées.
                </p>
            </div>
            <div className="container">
                <div className="inp">
                    <input type="checkbox" checked />
                    <p>E-mails produits</p>
                </div>
                <p>Obtenez des conseils sur les outils Instagram.</p>
            </div>
            <div className="container">
                <div className="inp">
                    <input type="checkbox" checked />
                    <p>Newsletters</p>
                </div>
                <p>
                    Apprenez-en davantage sur les nouvelles fonctionnalités
                    Instagram.
                </p>
            </div>
        </div>
    );
};

export default MailNotif;
