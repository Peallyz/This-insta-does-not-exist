import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../features/page.slice";

const Like = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.current);
    const previousPage = useSelector((state) => state.page.previous);

    useEffect(() => {
        function verif(e) {
            if (
                currentPage === 5 &&
                e.target.getAttribute("data-key") !== "1"
            ) {
                dispatch(setCurrentPage(previousPage));
            } else if (currentPage !== 5) {
            }
        }

        window.addEventListener("click", verif);

        return function () {
            window.removeEventListener("click", verif);
        };
    }, [currentPage, previousPage, dispatch]);
    return (
        <div
            className={
                currentPage === 5 ? "like__content active" : "like__content"
            }
            data-key={"1"}
        >
            <p data-key={"1"}>Vous n'avez pas encore de notifications</p>
        </div>
    );
};

export default Like;
