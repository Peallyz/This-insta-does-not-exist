import React from "react";
import { useSelector } from "react-redux";

const InboxContact = () => {
    const userData = useSelector((state) => state.user.dataOnline);
    const minutesToDays = (min) => {
        return Math.floor(min / 60 / 24);
    };
    const minutesToHours = (min) => {
        return Math.floor(min / 60);
    };
    return (
        <div className="inbox__contact">
            <ul>
                {userData &&
                    userData.map((user, index) => (
                        <li key={index * Math.random() * 99999}>
                            <div
                                className={
                                    user.online > 7680
                                        ? "user__pic online"
                                        : "user__pic"
                                }
                            >
                                <img
                                    src={user.picture.large}
                                    alt={
                                        "photo de " +
                                        user.name.first +
                                        " " +
                                        user.name.last
                                    }
                                    className="online"
                                />
                                <div className="name">
                                    <p>
                                        {user.name.first} {user.name.last}
                                    </p>
                                    <p>
                                        En ligne{" "}
                                        {user.online > 7680
                                            ? ""
                                            : minutesToHours(user.online) < 1
                                            ? `il y a ${user.online} minute${
                                                  user.online > 1 ? "s" : ""
                                              }`
                                            : minutesToHours(user.online) > 24
                                            ? `il y a ${minutesToDays(
                                                  user.online
                                              )} jour${
                                                  minutesToDays(user.online) > 1
                                                      ? "s"
                                                      : ""
                                              }`
                                            : `il y a ${minutesToHours(
                                                  user.online
                                              )} heure${
                                                  minutesToHours(user.online) >
                                                  1
                                                      ? "s"
                                                      : ""
                                              }`}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default InboxContact;
