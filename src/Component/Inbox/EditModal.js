import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditOpen } from "../../features/edit.slice";

const EditModal = () => {
    const dispatch = useDispatch();
    const openEdit = useSelector((state) => state.edit.open);
    const userData = useSelector((state) => state.user.data);

    return (
        <div className={openEdit ? "modal active" : "modal"}>
            <div className="modal__box">
                <div className="modal__box--header">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#262626"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => dispatch(setEditOpen(false))}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <h3>Nouveau message</h3>
                    <h5>Suivant</h5>
                </div>
                <div className="modal__box--form">
                    <label htmlFor="modalForm">A :</label>
                    <input type="text" placeholder="Recherchez..." />
                </div>
                <div className="modal__box--content">
                    <h3>Suggestions</h3>
                    <ul>
                        {userData &&
                            userData.map((user, index) => (
                                <li key={index * Math.random() * 99999}>
                                    <label
                                        htmlFor={"check" + index}
                                        className="label__container"
                                    >
                                        <div>
                                            <img
                                                src={user.picture.large}
                                                alt=""
                                            />
                                            <div className="name">
                                                <p>
                                                    {user.name.first}{" "}
                                                    {user.name.last}
                                                </p>
                                                <p>
                                                    {user.name.last.toLowerCase()}
                                                    _
                                                    {user.name.first.toLowerCase()}
                                                </p>
                                            </div>
                                        </div>
                                        <input
                                            id={"check" + index}
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
