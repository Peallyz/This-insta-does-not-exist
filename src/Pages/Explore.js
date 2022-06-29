import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExplorePicture from "../Component/Picture/ExplorePicture";
import { setCurrentPage, setPreviousPage } from "../features/page.slice";

const Explore = () => {
    const dispatch = useDispatch;
    const currentPage = useSelector((state) => state.page.current);
    const imgArray = useSelector((state) => state.pic.img);

    currentPage !== 6 &&
        currentPage !== 3 &&
        currentPage !== 5 &&
        dispatch(setPreviousPage(currentPage));
    dispatch(setCurrentPage(4));

    return (
        <div className="explore">
            <div className="pic__container">
                {imgArray &&
                    imgArray.map((img, index) => (
                        <ExplorePicture
                            key={index * Math.random() * 99999999}
                            index={index}
                            img={img}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Explore;
