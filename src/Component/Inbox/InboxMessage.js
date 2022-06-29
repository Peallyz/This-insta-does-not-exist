import React from "react";
import { useDispatch } from "react-redux";
import { setEditOpen } from "../../features/edit.slice";

const InboxMessage = () => {
    const dispatch = useDispatch();

    return (
        <div className="inbox__message">
            <img src="./assets/send.png" alt="send icon" />
            <h4>Vos messages</h4>
            <p>
                Envoyez des photos et des messages privés à un(e) ami(e) ou à un
                groupe.
            </p>
            <button
                onClick={() => dispatch(setEditOpen(true))}
                className="button"
            >
                Envoyer un message
            </button>
        </div>
    );
};

export default InboxMessage;
