import React from "react";

import { useSelector } from "react-redux";

const Feed = ({ index, img }) => {
    const user = useSelector((state) => state.user.dataOnline);
    const likes = useSelector((state) => state.pic.like);
    const comments = useSelector((state) => state.pic.comment);

    const random1To200 = Math.round(Math.random() * 200);

    const currentUser = user.filter(
        (users) => user.findIndex((data) => data === users) === random1To200
    );
    const currentLike = likes.filter(
        (users) => likes.findIndex((data) => data === users) === index
    );
    const currentComment = comments.filter(
        (users) => comments.findIndex((data) => data === users) === index
    );

    return (
        user && (
            <div className="feed">
                <div className="feed__header">
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="5" cy="12" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                    </svg>
                </div>
                <div className="feed__img">
                    <img src={img} alt={"photo" + index} />
                </div>
                <div className="feed__description">
                    <div className="feed__comment">
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
                            <strong>{currentLike} J'aime</strong>
                        </p>
                        <p>
                            <strong>
                                {currentUser[0].name.last.toLowerCase()}
                                {"_"}
                                {currentUser[0].name.first.toLowerCase()}
                            </strong>
                            <span>
                                {" "}
                                Lorem ipsum dolor sit amet. Lorem ipsum, dolor
                                sit amet consectetur adipisicing elit. Sapiente
                                neque totam nulla adipisci earum, velit
                                voluptatem dolorum voluptas nostrum dolore?
                                Repudiandae alias quae eveniet
                            </span>
                        </p>
                        <p>Afficher les {currentComment} commentaires</p>
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
        )
    );
};

export default Feed;
