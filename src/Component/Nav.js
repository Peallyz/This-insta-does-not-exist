import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setPreviousPage } from "../features/page.slice";
import AddContent from "./AddContent";
import Like from "./Like";
import Profil from "./Profil";
import { Link } from "react-router-dom";

const Nav = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.current);

    return (
        <div className="nav__header">
            <div className="box">
                <div className="logo">
                    {/* <div className="logo__icon"></div> */}
                    <Link to={"/"}>
                        <img
                            src="./assets/Instagram_logo.svg"
                            alt="instagram logo"
                            className="logo__title"
                            onClick={() => {
                                currentPage !== 6 &&
                                    currentPage !== 3 &&
                                    currentPage !== 5 &&
                                    dispatch(setPreviousPage(currentPage));
                                dispatch(setCurrentPage(1));
                            }}
                        />
                    </Link>
                </div>
                <form>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#8e8e8e"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <input type="text" placeholder="Rechercher" />
                </form>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        currentPage === 1 ? "active" : ""
                                    }
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000000"
                                    fill="#ffffff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    onClick={() => {
                                        currentPage !== 6 &&
                                            currentPage !== 3 &&
                                            currentPage !== 5 &&
                                            dispatch(
                                                setPreviousPage(currentPage)
                                            );
                                        dispatch(setCurrentPage(1));
                                    }}
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                    <rect x="10" y="12" width="4" height="4" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/inbox"}>
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        currentPage === 2 ? "active" : ""
                                    }
                                    onClick={() => {
                                        currentPage !== 6 &&
                                            currentPage !== 3 &&
                                            currentPage !== 5 &&
                                            dispatch(
                                                setPreviousPage(currentPage)
                                            );
                                        dispatch(setCurrentPage(2));
                                    }}
                                >
                                    <path
                                        d="M9.8912 13.548L3.0762 9.381C2.1832 8.835 2.3642 7.488 3.3702 7.197L19.4602 2.549C20.3752 2.284 21.2212 3.138 20.9472 4.05L16.1732 20.014C15.8742 21.014 14.5332 21.186 13.9912 20.294L9.8912 13.548 M15.712 7.72681L9.89099 13.5478"
                                        stroke="#130F26"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={currentPage === 3 ? "active" : ""}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#000000"
                                fill="#ffffff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={() => {
                                    currentPage !== 6 &&
                                        currentPage !== 3 &&
                                        currentPage !== 5 &&
                                        dispatch(setPreviousPage(currentPage));
                                    dispatch(setCurrentPage(3));
                                }}
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <rect
                                    x="4"
                                    y="4"
                                    width="16"
                                    height="16"
                                    rx="2"
                                />
                                <line x1="9" y1="12" x2="15" y2="12" />
                                <line x1="12" y1="9" x2="12" y2="15" />
                            </svg>
                        </li>
                        <AddContent />
                        <li>
                            <Link to={"/explore"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    stroke="#000000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={
                                        currentPage === 4 ? "active" : ""
                                    }
                                    onClick={() => {
                                        currentPage !== 6 &&
                                            currentPage !== 3 &&
                                            currentPage !== 5 &&
                                            dispatch(
                                                setPreviousPage(currentPage)
                                            );
                                        dispatch(setCurrentPage(4));
                                    }}
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
                                </svg>
                            </Link>
                        </li>
                        <li
                            className="like"
                            data-key={"1"}
                            onClick={() => {
                                currentPage !== 6 &&
                                    currentPage !== 3 &&
                                    currentPage !== 5 &&
                                    dispatch(setPreviousPage(currentPage));
                                dispatch(setCurrentPage(5));
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={
                                    currentPage === 5
                                        ? "like__svg active"
                                        : "like__svg"
                                }
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                data-key={"1"}
                                stroke="#000000"
                                fill="#FFFFFF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="transparent"
                                    d="M0 0h24v24H0z"
                                    fill="transparent"
                                />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            {currentPage === 5 && <Like />}
                        </li>
                        <li className="profil__pic">
                            <img
                                data-key={"1"}
                                className={currentPage === 6 ? "active" : ""}
                                src="./assets/peally.jpg"
                                alt="user"
                                onClick={() => {
                                    currentPage !== 6 &&
                                        currentPage !== 3 &&
                                        currentPage !== 5 &&
                                        dispatch(setPreviousPage(currentPage));
                                    dispatch(setCurrentPage(6));
                                }}
                            />
                            {currentPage === 6 && <Profil />}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
