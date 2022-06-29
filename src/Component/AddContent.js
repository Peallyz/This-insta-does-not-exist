import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../features/page.slice";

const AddContent = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.current);
    const previousPage = useSelector((state) => state.page.previous);
    return (
        <div
            className={
                currentPage === 3
                    ? "new__content modal active "
                    : "new__content modal"
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                    dispatch(setCurrentPage(previousPage));
                }}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div className="new__content--box modal__box">
                <h2 className="new__content--title">
                    Créer une nouvelle publication
                </h2>
                <div className="new__content--drop">
                    <div>
                        <img src="./assets/drag.png" alt="media icon" />
                        <p>Faites glisser les photos et les vidéos ici</p>
                        <button className="button">
                            Sélectionner sur l'ordinateur
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContent;
