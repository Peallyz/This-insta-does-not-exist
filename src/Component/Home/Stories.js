import React, { useState } from "react";
import { useSelector } from "react-redux";

const Stories = () => {
    const [scroll, setScroll] = useState(0);
    const users = useSelector((state) => state.user.data);

    const scrollUp = () => {
        if (scroll < 15000 && scroll > 14600) {
            setScroll(15000);
        } else if (scroll < 14600) {
            setScroll(scroll + 470);
        }

        applyScroll();
    };
    const scrollDown = () => {
        if (scroll < 400) {
            setScroll(-10);
        } else if (scroll > 470) {
            setScroll(scroll - 470);
        }

        applyScroll();
    };

    const applyScroll = () => {
        divToScroll.style.transform = `translateX(${-scroll}px)`;
    };

    const divToScroll = document.querySelector(".stories .scroll ");

    return (
        <div className="stories">
            <div className="chevron">
                <div
                    className={
                        scroll <= 470 ? "chevron__left" : "chevron__left active"
                    }
                    onClick={() => scrollDown()}
                >
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
                <div
                    className={
                        scroll >= 15040
                            ? "chevron__right"
                            : "chevron__right active"
                    }
                    onClick={() => scrollUp()}
                >
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
            </div>
            <div className="scroll">
                <ul>
                    {users.map((user, index) => (
                        <li
                            key={
                                index +
                                Math.round(
                                    Math.random() * Math.random() * 7859901509
                                )
                            }
                        >
                            <img
                                src={user.picture.large}
                                alt={"user" + index}
                            />
                            <p>
                                {user.name.last.toLowerCase().replace(" ", "_")}
                                _
                                {user.name.first
                                    .toLowerCase()
                                    .replace(" ", "_")}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Stories;
