import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <h4>Cette page n’est malheureusement pas disponible.</h4>
            <p>
                Le lien que vous avez suivi est peut-être rompu, ou la page a
                été supprimée. <Link to={"/"}> Revenir à Instagram.</Link>
            </p>
        </div>
    );
};

export default NotFound;
