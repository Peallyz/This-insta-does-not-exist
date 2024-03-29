import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FullscreenPicture = () => {
    const imgArr = useSelector((state) => state.pic.img);
    const user = useSelector((state) => state.user.dataOnline);
    const like = useSelector((state) => state.pic.like);
    const location = useLocation();

    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();

    const random1To200 = Math.round(Math.random() * 200);

    const currentUser = user.filter(
        (users) => user.findIndex((data) => data === users) === random1To200
    );

    const currentImg = imgArr.filter(
        (imgs) =>
            imgArr.findIndex((img) => img === imgs) === location.state.index
    );
    const currentLike = like.filter(
        (users) =>
            like.findIndex((data) => data === users) === location.state.index
    );

    useEffect(() => {
        if (location.state.index + 1 > imgArr.length - 1) {
            setNextPage(0);
            setPreviousPage(location.state.index - 1);
        } else if (location.state.index - 1 < 0) {
            setNextPage(location.state.index + 1);
            setPreviousPage(imgArr.length - 1);
        } else {
            setNextPage(location.state.index + 1);
            setPreviousPage(location.state.index - 1);
        }
    }, [imgArr.length, location.state.index]);

    return (
        <div className="fullscreen__modal">
            <div className="modal active ">
                <Link
                    to={`/p/${previousPage}`}
                    state={{ index: previousPage }}
                    className="left__chevron"
                >
                    <div className="chevron left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#292929"
                            className="bi bi-chevron-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    </div>
                </Link>
                <Link
                    to={`/p/${nextPage}`}
                    state={{ index: nextPage }}
                    className="right__chevron"
                >
                    <div className="chevron right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#292929"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </Link>
                <Link to={"/explore"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="close__icon"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </Link>
                <div className="modal__box fullscreen">
                    <div className="fullscreen__pic">
                        <div className="pic">
                            <img
                                src={currentImg}
                                alt={"photo" + location.state.index}
                            />
                        </div>
                    </div>
                    <div className="fullscreen__comment">
                        <div className="fullscreen__comment--header">
                            <div>
                                <img
                                    src={currentUser[0].picture.large}
                                    alt={
                                        "photo de " +
                                        currentUser[0].name.first +
                                        " " +
                                        currentUser[0].name.last
                                    }
                                />
                                <p>
                                    {currentUser[0].name.last.toLowerCase()}
                                    {"_"}
                                    {currentUser[0].name.first.toLowerCase()}
                                </p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-dots"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#262626"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx="5" cy="12" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                            </svg>
                        </div>
                        <div className="fullscreen__comment--description">
                            <img
                                src={currentUser[0].picture.large}
                                alt={
                                    "photo de " +
                                    currentUser[0].name.first +
                                    " " +
                                    currentUser[0].name.last
                                }
                            />
                            <p>
                                {currentUser[0].name.last.toLowerCase()}
                                {"_"}
                                {currentUser[0].name.first.toLowerCase()}{" "}
                                <span>
                                    Lorem ipsum dolor sit amet. Lorem ipsum,
                                    dolor sit amet consectetur adipisicing elit.
                                    Sapiente neque totam nulla adipisci earum,
                                    velit voluptatem dolorum voluptas nostrum
                                    dolore? Repudiandae alias quae eveniet
                                    temporibus dolor eos dicta natus accusamus
                                    eius voluptatem laborum vitae reprehenderit
                                    corporis soluta, hic esse placeat dolorum
                                    cum recusandae! Ad ab quo nam eaque culpa
                                    possimus!
                                </span>
                            </p>
                        </div>
                        <div className="fullscreen__comment--comment">
                            <div className="icon">
                                <div className="icon__left">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-heart"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#262626"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-message-circle"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#262626"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-send"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#262626"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                    </svg>
                                </div>
                                <div className="icon__right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-bookmark"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#262626"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                    </svg>
                                </div>
                            </div>
                            <p>
                                Aimé par{" "}
                                <strong>{currentLike} personnes</strong>
                            </p>
                            <form>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-mood-smile"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#262626"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="9" y1="10" x2="9.01" y2="10" />
                                    <line x1="15" y1="10" x2="15.01" y2="10" />
                                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Ajouter un commentaire..."
                                />
                                <button type="submit">Publier</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullscreenPicture;
