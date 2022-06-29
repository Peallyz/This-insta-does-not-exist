import React, { useState } from "react";
import { useSelector } from "react-redux";
import Feed from "../Component/Home/Feed";
import Stories from "../Component/Home/Stories";
import Suggestion from "../Component/Home/Suggestion";

const Home = () => {
    const [card, setCard] = useState(15);

    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
        // scrollTop = scroll depuis le top
        // scrollHeight = scroll total
        // clientHeight = hauteur de la fenêtre, partie visible.

        if (clientHeight + scrollTop >= scrollHeight - 20) {
            addFeed(15);
        }
    });

    function addFeed(nb) {
        if (card > 230) {
            return;
        }
        setCard(card + 15);
    }
    const imgs = useSelector((state) => state.pic.img);
    return (
        <div className="home">
            <div className="home__left">
                <Stories />
                {imgs.slice(0, card).map((img, index) => (
                    <Feed
                        index={index}
                        img={img}
                        key={Math.floor(
                            Math.random() * 789120456 * Math.random() * 99999
                        )}
                    />
                ))}
            </div>
            <div className="home__right">
                <div className="fixed">
                    <Suggestion />
                </div>
            </div>
        </div>
    );
};

export default Home;
