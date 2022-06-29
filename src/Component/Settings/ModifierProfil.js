import React from "react";

const ModifierProfil = () => {
    return (
        <form className="modifierProfil">
            <div className="grid">
                <img src="./assets/peally.jpg" alt="main user pic" />
                <div className="currentUserName">
                    <p>andre_pierre</p>
                    <p>Modifier la photo de profil</p>
                </div>
                <label htmlFor="name" className="name">
                    Nom
                </label>
                <input
                    type="text"
                    value={"Pierre ANDRE"}
                    className="name"
                    id="name"
                />

                <div className="information1">
                    <p>
                        Aidez les gens à trouver votre compte à l’aide de votre
                        nom le plus connu, que ce soit votre nom complet, votre
                        surnom ou votre nom d’entreprise.
                    </p>
                    <p>
                        Vous pouvez uniquement changer votre nom deux fois tous
                        les 14 jours.
                    </p>
                </div>

                <label htmlFor="username" className="username">
                    Nom d'utilisateur
                </label>
                <input
                    type="text"
                    id="username"
                    value={"andre_pierre"}
                    className="username"
                />
                <div className="information2">
                    <p>
                        Dans la plupart des cas, vous pourrez reprendre votre
                        nom d’utilisateur peally_sc2 pendant encore 14 jours. En
                        savoir plus
                    </p>
                </div>

                <label htmlFor="website" className="website">
                    Site Web
                </label>
                <input
                    type="text"
                    placeholder="Site Web"
                    id="website"
                    className="website"
                />

                <label htmlFor="bio" className="bio">
                    Bio
                </label>
                <textarea
                    name="bio"
                    value={
                        "La premiere fois c’est une erreur, la seconde fois c’est une bétise."
                    }
                    id="bio"
                    className="bio"
                ></textarea>
                <div className="information3">
                    <h5>Informations personnelles</h5>
                    <p>
                        Fournissez vos informations personnelles, même si le
                        compte est utilisé pour une entreprise, un animal ou
                        autre chose. Elles n’apparaîtront pas sur votre profil
                        public
                    </p>
                </div>
                <label htmlFor="mail" className="mail">
                    Adresse e-mail
                </label>
                <input
                    type="text"
                    placeholder="Adresse e-mail"
                    id="mail"
                    className="mail"
                />

                <label htmlFor="phone" className="phone">
                    Numéro de téléphone
                </label>
                <input
                    type="text"
                    value={"+33 7 60 81 72 27"}
                    id="phone"
                    className="phone"
                />

                <label htmlFor="genre" className="genre">
                    genre
                </label>
                <input
                    type="text"
                    placeholder="Genre"
                    id="genre"
                    className="genre"
                />
                <label htmlFor="similar" className="similar">
                    Compte similaire suggérés
                </label>
                <div className="include">
                    <input type="checkbox" id="similar" checked />
                    <p>
                        Incluez votre compte lorsque vous recommandez des
                        comptes similaires que les personnes pourraient suivre.
                    </p>
                </div>
            </div>
            <div className="submit">
                <button className="button" onClick={(e) => e.preventDefault()}>
                    Envoyer
                </button>{" "}
                <p>Désactivez temporairement mon compte</p>
            </div>
        </form>
    );
};

export default ModifierProfil;
