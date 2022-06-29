import React, { useState } from "react";

const Security = () => {
    const [triggerSwitch1, setTriggerSwitch1] = useState(false);
    const [triggerSwitch2, setTriggerSwitch2] = useState(false);
    const [triggerSwitch3, setTriggerSwitch3] = useState(false);
    return (
        <form className="form">
            <div className="container">
                <h4>Confidentialité du compte</h4>
                <div className="label">
                    <label htmlFor="like">Non</label>
                    <input type="checkbox" id="like" />
                </div>

                <p>
                    Lorsque vous avez un compte privé, seules les personnes que
                    vous approuvez peuvent voir vos photos et vidéos sur
                    Instagram. Vos abonnés existants ne seront pas affectés.
                </p>
            </div>
            <div className="container">
                <h4>Statut En ligne</h4>
                <div className="label">
                    <label htmlFor="c1">Afficher le statut en ligne</label>
                    <input type="checkbox" id="c1" checked />
                </div>

                <p className="paragraphe2">
                    Autorisez les comptes que vous suivez et toute personne à
                    qui vous envoyez un message à voir quand vous étiez en ligne
                    pour la dernière fois ou si vous l’êtes actuellement sur les
                    applications Instagram. Si cette option est désactivée, vous
                    ne pouvez pas voir le statut d’activité des autres comptes.
                    <span> En savoir plus</span>
                </p>
                <p>
                    Vous pouvez continuer d’utiliser nos services si le statut
                    d’activité est désactivé.
                </p>
            </div>
            <div className="container">
                <h4>Partage de stories</h4>
                <div className="label">
                    <label htmlFor="likec1">Autoriser le partage</label>
                    <input type="checkbox" id="likec1" checked />
                </div>

                <p>
                    Autorisez le partage de votre story sous forme de message.
                </p>
            </div>
            <div className="container">
                <h4>Commentaires</h4>

                <p>
                    <span>Modifier les paramètres des commentaires</span>
                </p>
            </div>
            <div className="container">
                <h4>Photos de vous</h4>
                <div className="label">
                    <label htmlFor="add1">Ajouter automatiquement</label>
                    <input type="radio" name="add" id="add1" checked />
                </div>

                <div className="label">
                    <label htmlFor="add2">Ajouter manuellement</label>
                    <input type="radio" name="add" id="add2" checked />
                </div>
                <p>
                    Choisissez comment ajouter les photos où vous apparaissez à
                    votre profil. <span>En savoir plus</span> à propos des
                    photos de vous.
                </p>
            </div>
            <div className="container">
                <h4>Authentification à deux facteurs</h4>

                <p>
                    <span>
                        Modifier le paramètre d’authentification à deux facteurs
                    </span>
                </p>
            </div>
            <div className="container">
                <h4>Télécharger les données</h4>

                <p>
                    <span>Demander un téléchargement</span>
                </p>
            </div>
            <div className="container">
                <h4>Aide confidentialité et sécurité</h4>

                <p>
                    <span>Assistance</span>
                </p>
            </div>
            <div className="container">
                <h4>Mentions</h4>
                <p className="subtitle">Allow @mentions From</p>
                <div className="label ">
                    <label htmlFor="mention1" className="alter">
                        Tout le monde
                    </label>
                    <input type="radio" name="mention" id="mention1" checked />
                </div>
                <div className="label ">
                    <label htmlFor="mention2" className="alter">
                        Personnes que vous suivez
                    </label>
                    <input type="radio" name="mention" id="mention2" checked />
                </div>
                <div className="label ">
                    <label htmlFor="mention3" className="alter">
                        Personne
                    </label>
                    <input type="radio" name="mention" id="mention3" checked />
                </div>
                <p className="reduce">
                    Choisissez les personnes qui peuvent vous @mentionner pour
                    associer votre compte dans leurs stories, commentaires,
                    vidéos en direct et légendes. Lorsque des personnes essaient
                    de vous @mentionner, elles verront si vous n’acceptez pas
                    les @mentions.
                </p>
            </div>
            <div className="container">
                <h4>Guides</h4>
                <p className="subtitle">Vos publications</p>
                <div className="switch">
                    <div className="switch__text">
                        <p>
                            <strong>
                                Autoriser d’autres personnes à utiliser vos
                                publications
                            </strong>
                        </p>
                        <p>
                            D’autres personnes peuvent ajouter vos publications
                            à leurs guides. Votre nom d’utilisateur sera
                            toujours affiché avec vos publications.
                        </p>
                    </div>
                    <div
                        className={
                            triggerSwitch1
                                ? "button__custom active"
                                : "button__custom"
                        }
                        onClick={() => setTriggerSwitch1(!triggerSwitch1)}
                    >
                        <div className="button__dot "></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h4>Publications</h4>
                <p className="subtitle">J’aime et vues</p>
                <div className="switch">
                    <div className="switch__text">
                        <p>
                            <strong>
                                Autoriser d’autres personnes à utiliser vos
                                publications
                            </strong>
                        </p>
                    </div>
                    <div
                        className={
                            triggerSwitch2
                                ? "button__custom active"
                                : "button__custom"
                        }
                        onClick={() => setTriggerSwitch2(!triggerSwitch2)}
                    >
                        <div className="button__dot "></div>
                    </div>
                </div>
                <p className="reduce">
                    Vous ne verrez plus le nombre total de J’aime et de vues sur
                    les publications des autres personnes. Vous pouvez masquer
                    le nombre de J’aime sur vos propres publications lors de
                    leur création. Pour cela, accédez aux paramètres avancés
                    puis activez Masquer le nombre de J’aime et de vues pour
                    cette publication.
                </p>
            </div>
            <div className="container">
                <p className="subtitle">Autoriser les identifications de</p>
                <div className="label alternative">
                    <label htmlFor="allow1" className="alter">
                        Tout le monde
                    </label>
                    <input type="radio" name="allow" id="allow1" checked />
                </div>
                <div className="label alternative">
                    <label htmlFor="allow2" className="alter">
                        Personnes que vous suivez
                    </label>
                    <input type="radio" name="allow" id="allow2" checked />
                </div>
                <div className="label alternative">
                    <label htmlFor="allow3" className="alter">
                        Personne
                    </label>
                    <input type="radio" name="allow" id="allow3" checked />
                </div>
            </div>
            <div className="container">
                <p className="subtitle">Demandes de la part des boutiques</p>

                <div className="switch">
                    <div className="switch__text">
                        <p>
                            <strong>
                                Autoriser d’autres personnes à utiliser vos
                                publications
                            </strong>
                        </p>
                    </div>
                    <div
                        className={
                            triggerSwitch3
                                ? "button__custom active"
                                : "button__custom"
                        }
                        onClick={() => setTriggerSwitch3(!triggerSwitch2)}
                    >
                        <div className="button__dot "></div>
                    </div>
                </div>
                <p className="reduce">
                    Autorisez les demandes visant à mettre à la une vos photos
                    et vos vidéos dans des boutiques sur les produits des
                    entités Meta après avoir identifié des comptes avec boutique
                    ou utilisé des hashtags en lien avec des boutiques dans
                    votre publication. <span>En savoir plus</span>
                </p>
            </div>
        </form>
    );
};

export default Security;
