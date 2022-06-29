import React from "react";

const ChangeMDP = () => {
    return (
        <form className="mdpChange">
            <div className="grid">
                <img src="./assets/peally.jpg" alt="main user pic" />
                <div className="currentUserName">
                    <p>andre_pierre</p>
                </div>
                <label htmlFor="mdp" className="mdp">
                    Ancien mot de passe
                </label>
                <input type="text" className="mdp" id="mdp" />
                <label htmlFor="newMDP" className="newMDP">
                    Nouveau mot de passe
                </label>
                <input type="text" className="newMDP" id="namenewMDP" />
                <label htmlFor="confirmMDP" className="confirmMDP">
                    Confirmer le nouveau mot de passe
                </label>
                <input type="text" className="confirmMDP" id="confirmMDP" />
            </div>
            <div className="button__submit">
                <button className="button">Modifier le mot de passe</button>
                <p>Mot de passe oublier ?</p>
            </div>
        </form>
    );
};

export default ChangeMDP;
