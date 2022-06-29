import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ExplorePicture = ({ index, img }) => {
    const like = useSelector((state) => state.pic.like);
    const comment = useSelector((state) => state.pic.comment);

    const currentLike = like.filter(
        (users) => like.findIndex((data) => data === users) === index
    );
    const currentComment = comment.filter(
        (users) => comment.findIndex((data) => data === users) === index
    );

    return (
        <Link
            key={Math.floor(Math.random() * 99999 * index)}
            to={`/p/${index}`}
            state={{
                img,
                index,
            }}
        >
            <div className="pic">
                <img src={img} alt={"photo" + index} />
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`span${index}`}
                    >
                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <p>
                        {String(currentLike).split("").slice(0, -3).join("") > 1
                            ? String(currentLike)
                                  .split("")
                                  .slice(0, -3)
                                  .join("") + "K"
                            : currentLike}
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-message-circle"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    </svg>
                    <p>{currentComment}</p>
                </span>
            </div>
        </Link>
    );
};

export default ExplorePicture;
