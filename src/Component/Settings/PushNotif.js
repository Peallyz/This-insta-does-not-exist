import React from "react";

const PushNotif = () => {
    return (
        <form className="form">
            <div className="container">
                <h4>Mentions J'aime</h4>
                <div className="label">
                    <label htmlFor="like">Non</label>
                    <input type="radio" name="like" id="like" checked />
                </div>
                <div className="label">
                    <label htmlFor="like">Des personnes que je suis</label>
                    <input type="radio" name="like" id="like" checked />
                </div>
                <div className="label">
                    <label htmlFor="like">De tout le monde</label>
                    <input type="radio" name="like" id="like" checked />
                </div>
                <p>johnappleseed a aimé votre photo.</p>
            </div>
            <div className="container">
                <h4>Commentaires</h4>
                <div className="label">
                    <label htmlFor="c1">Non</label>
                    <input type="radio" name="c" id="c1" checked />
                </div>
                <div className="label">
                    <label htmlFor="c2">Des personnes que je suis</label>
                    <input type="radio" name="c" id="c2" checked />
                </div>
                <div className="label">
                    <label htmlFor="c3">De tout le monde</label>
                    <input type="radio" name="c" id="c3" checked />
                </div>
                <p>johnappleseed a commenté : "Belle photo !"</p>
            </div>
            <div className="container">
                <h4>Mentions J’aime sur les commentaires</h4>
                <div className="label">
                    <label htmlFor="likec1">Non</label>
                    <input type="radio" name="likec" id="likec1" checked />
                </div>
                <div className="label">
                    <label htmlFor="likec2">Des personnes que je suis</label>
                    <input type="radio" name="likec" id="likec2" checked />
                </div>

                <p>
                    johnappleseed a aimé votre commentaire : « Belle photo ! »
                </p>
            </div>
            <div className="container">
                <h4>Mentions J’aime et commentaires sur des photos de vous</h4>
                <div className="label">
                    <label htmlFor="com1">Non</label>
                    <input type="radio" name="com" id="com1" checked />
                </div>
                <div className="label">
                    <label htmlFor="com2">Des personnes que je suis</label>
                    <input type="radio" name="com" id="com2" checked />
                </div>
                <div className="label">
                    <label htmlFor="com3">De tout le monde</label>
                    <input type="radio" name="com" id="com3" checked />
                </div>
                <p>
                    johnappleseed a commenté une publication dans laquelle votre
                    nom apparaît.
                </p>
            </div>
            <div className="container">
                <h4>Demandes d’abonnement acceptées</h4>
                <div className="label">
                    <label htmlFor="abo1">Non</label>
                    <input type="radio" name="abo" id="abo1" checked />
                </div>

                <div className="label">
                    <label htmlFor="abo2">De tout le monde</label>
                    <input type="radio" name="abo" id="abo2" checked />
                </div>
                <p>
                    John Appleseed (@johnappleseed) a accepté votre demande
                    d’abonnement.
                </p>
            </div>
            <div className="container">
                <h4>Demandes Instagram Direct</h4>
                <div className="label">
                    <label htmlFor="insta1">Non</label>
                    <input type="radio" name="insta" id="insta1" checked />
                </div>

                <div className="label">
                    <label htmlFor="insta2">De tout le monde</label>
                    <input type="radio" name="insta" id="insta2" checked />
                </div>
                <p>johnappleseed veut vous envoyer un message.</p>
            </div>
            <div className="container">
                <h4>Instagram Direct</h4>
                <div className="label">
                    <label htmlFor="insta11">Non</label>
                    <input type="radio" name="instadir" id="insta11" checked />
                </div>

                <div className="label">
                    <label htmlFor="insta12">De tout le monde</label>
                    <input type="radio" name="instadir" id="insta12" checked />
                </div>
                <p>johnappleseed vous a envoyé un message.</p>
            </div>
            <div className="container">
                <h4>Rappels</h4>
                <div className="label">
                    <label htmlFor="rappel1">Non</label>
                    <input type="radio" name="rappel" id="rappel1" checked />
                </div>

                <div className="label">
                    <label htmlFor="rappel2">De tout le monde</label>
                    <input type="radio" name="rappel" id="rappel2" checked />
                </div>
                <p>
                    Vous avez des notifications en attente et autres
                    notifications similaires
                </p>
            </div>
            <div className="container">
                <h4>Premières publications et Stories</h4>
                <div className="label">
                    <label htmlFor="first1">Non</label>
                    <input type="radio" name="first" id="first1" checked />
                </div>
                <div className="label">
                    <label htmlFor="first2">Des personnes que je suis</label>
                    <input type="radio" name="first" id="first2" checked />
                </div>
                <div className="label">
                    <label htmlFor="first3">De tout le monde</label>
                    <input type="radio" name="first" id="first3" checked />
                </div>
                <p>
                    Découvrez la première Story de johnappleseed sur Instagram
                    et d’autres notifications similaires.
                </p>
            </div>
            <div className="container">
                <h4>Nombre de vues de la vidéo</h4>
                <div className="label">
                    <label htmlFor="view1">Non</label>
                    <input type="radio" name="view" id="view1" checked />
                </div>

                <div className="label">
                    <label htmlFor="view2">De tout le monde</label>
                    <input type="radio" name="view" id="view2" checked />
                </div>
                <p>Votre vidéo a obtenu plus de 100 k vues.</p>
            </div>
            <div className="container">
                <h4>Demandes d’assistance</h4>
                <div className="label">
                    <label htmlFor="assist1">Non</label>
                    <input type="radio" name="assist" id="assist1" checked />
                </div>

                <div className="label">
                    <label htmlFor="assist2">Oui</label>
                    <input type="radio" name="assist" id="assist2" checked />
                </div>
                <p>
                    Votre demande d’assistance du juillet 10 vient d’être mise à
                    jour.
                </p>
            </div>
            <div className="container">
                <h4>Vidéos en direct</h4>
                <div className="label">
                    <label htmlFor="vid1">Non</label>
                    <input type="radio" name="vid" id="vid1" checked />
                </div>
                <div className="label">
                    <label htmlFor="vid2">Oui</label>
                    <input type="radio" name="vid" id="vid2" checked />
                </div>

                <p>
                    johnappleseed a démarré une vidéo en direct. Regardez-la
                    avant la fin.
                </p>
            </div>
        </form>
    );
};

export default PushNotif;
