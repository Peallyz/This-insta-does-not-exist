import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";

import FullscreenPicture from "./Component/Picture/FullscreenPicture";
import {
    setCommentData,
    setImgData,
    setLikeData,
} from "./features/picture.slice";
import { setInitData, setDataUpdate } from "./features/user.slice";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import MainProfil from "./Pages/MainProfil";
import Message from "./Pages/Message";
import NotFound from "./Pages/NotFound";
import Settings from "./Pages/Settings";

function App() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data);
    const [img, setImg] = useState([]);
    const [img2, setImg2] = useState([]);
    const [img3, setImg3] = useState([]);
    const imgArray = [];

    // ArrCumul.map((item) => {
    //     Object.assign({}, item, { online: time[i].online });
    // });

    setTimeout(() => {
        let time = [];
        let objToUpdate = [];

        let updatedArr = [];

        let updatedObj;

        const likes = [];
        const comments = [];
        let like;
        let comment;

        for (let i = 0; i < 230; i++) {
            like = String(
                Math.floor(Math.random() * 1000000).toLocaleString()
            ).replace(",", " ");
            comment = String(
                Math.floor(Math.random() * 10000).toLocaleString()
            ).replace(" ", ",");
            likes.push(like);
            comments.push(comment);
        }

        dispatch(setCommentData(comments));

        dispatch(setLikeData(likes));

        function addValueInObject(object, key, value) {
            let res = {};
            var textObject = JSON.stringify(object);
            if (textObject === "{}") {
                res = JSON.parse('{"' + key + '":"' + value + '"}');
            } else {
                res = JSON.parse(
                    "{" +
                        textObject.substring(1, textObject.length - 1) +
                        ',"' +
                        key +
                        '":' +
                        value +
                        "}"
                );
            }
            return res;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        for (let i = 0; i < img.length; i++) {
            imgArray.push(img[i].url);
        }
        for (let i = 0; i < img2.length; i++) {
            imgArray.push(img2[i].urls.small);
        }
        for (let i = 0; i < img3.length; i++) {
            imgArray.push(img3[i].url);
        }
        setTimeout(() => {
            shuffleArray(imgArray);
            dispatch(setImgData(imgArray));
        }, 1000);

        for (let i = 0; i < 200; i++) {
            time.push({ id: i, online: Math.floor(Math.random() * 10080) });

            objToUpdate = userData.filter(
                (el) => userData.findIndex((arr) => arr === el) === time[i].id
            );

            updatedObj = addValueInObject(
                objToUpdate[0],
                "online",
                time[i].online
            );

            updatedArr.push(updatedObj);
        }
        dispatch(setDataUpdate(updatedArr));
    }, 1000);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=200&exc=login&nat=fr")
            .then((res) => dispatch(setInitData(res.data.results)));

        axios
            .get("https://api.imgflip.com/get_memes")
            .then((res) => setImg(res.data.data.memes));

        axios
            .get(
                `https://api.unsplash.com/photos/random?count=30&client_id=${process.env.REACT_APP_ID}`
            )
            .then((res) => setImg2(res.data));
        axios
            .get(
                "https://api.thecatapi.com/v1/images/search?mime_type=jpg&limit=100"
            )
            .then((res) => setImg3(res.data));
    }, [dispatch]);

    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inbox" element={<Message />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/p/:slug" element={<FullscreenPicture />} />
                    <Route path="/profil" element={<MainProfil />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
