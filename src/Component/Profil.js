import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../features/page.slice";
import { Link } from "react-router-dom";

const Profil = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.current);
    const previousPage = useSelector((state) => state.page.previous);

    useEffect(() => {
        function verif(e) {
            if (
                currentPage === 6 &&
                e.target.getAttribute("data-key") !== "1"
            ) {
                dispatch(setCurrentPage(previousPage));
            } else if (currentPage !== 6) {
            }
        }

        window.addEventListener("click", verif);

        return function () {
            window.removeEventListener("click", verif);
        };
    }, [currentPage, previousPage, dispatch]);

    return (
        <nav
            data-key={"1"}
            className={currentPage === 6 ? "profil active" : "profil"}
        >
            <ul data-key={"1"}>
                <Link to={"/profil"} state={{ page: 1 }}>
                    <li data-key={"1"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user-circle"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#292929"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        <span>Profil</span>
                    </li>
                </Link>
                <Link to={"/profil"} state={{ page: 3 }}>
                    <li data-key={"1"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-bookmark"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#292929"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                        <span>Enregistré</span>
                    </li>
                </Link>
                <Link to={"/settings"}>
                    <li data-key={"1"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#292929"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        </svg>
                        <span>Paramètres</span>
                    </li>
                </Link>
                <li data-key={"1"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-refresh"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#292929"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    </svg>{" "}
                    <span>Changer de compte</span>
                </li>
                <li data-key={"1"}>
                    <span>Déconnection</span>
                </li>
            </ul>
        </nav>
    );
};

export default Profil;
