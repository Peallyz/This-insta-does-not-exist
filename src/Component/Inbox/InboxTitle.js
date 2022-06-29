import React from "react";
import { useDispatch } from "react-redux";
import { setEditOpen } from "../../features/edit.slice";
import EditModal from "./EditModal";

const InboxTitle = () => {
    const dispatch = useDispatch();

    return (
        <div className="inbox__title">
            <p>Pierre_ANDRE</p>
            <img src="./assets/chevron-down.svg" alt="chevron down" />
            <img
                onClick={() => dispatch(setEditOpen(true))}
                src="./assets/edit.svg"
                alt="edit icon"
            />
            <EditModal />
        </div>
    );
};

export default InboxTitle;
