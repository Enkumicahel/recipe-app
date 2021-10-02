import React, { useEffect, useState } from "react";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";
import {
    Card,
    CardImgOverlay,
    CardTitle,
    CardText,
    CardImg,
    CardGroup,
    Row,
    Input,
    Col,
} from "reactstrap";

import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import RecipeCard from "../components/RecipeCard/RecipeCard.js";
import { debounce } from "loadsh";
import ROUTES from "../config/routes.js";

var ps;

function Home(props) {
    const [backgroundColor, setBackgroundColor] = React.useState("black");
    const [activeColor, setActiveColor] = React.useState("info");
    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState([]);

    const mainPanel = React.useRef();
    const location = useLocation();
    React.useEffect(() => {
        async function getAllRecipes() {
            let response = await fetch("http://localhost:4001/recipe");
            response = await response.json();
            console.log(response);
            setRecipes(response);
        }
        getAllRecipes();
        if (navigator.platform.indexOf("Win") > -1) {
            //  ps = new PerfectScrollbar(mainPanel.current);
            //  document.body.classList.toggle("perfect-scrollbar-on");
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                // document.body.classList.toggle("perfect-scrollbar-on");
            }
        };
    }, []);
    // React.useEffect(() => {
    //   mainPanel.current.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    // }, [location]);
    const handleActiveClick = (color) => {
        setActiveColor(color);
    };
    const handleBgClick = (color) => {
        setBackgroundColor(color);
    };

    const onSearchHandler = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        debounce(() => {
            setSearched(
                recipes.filter((item) =>
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
            );
        }, 1000)();
    }, [search, recipes]);

    return (
        <div className="wrapper">
            <div className="main-panel" style={{ background: "#e3e3e3" }}>
                <Card className="bg-dark p-0 m-0 text-white mb-5">
                    <CardImg
                        src="https://previews.123rf.com/images/krisckam/krisckam1705/krisckam170500022/78596281-international-mix-set-foods-top-view-on-table.jpg"
                        alt="..."
                        style={{
                            height: "auto",
                            width: "100%",
                            display: "block",
                        }}
                    />
                    <CardImgOverlay
                        style={{
                            position: "absolute",
                            // top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            margin: "15%",
                            borderRadius: "5.25rem",
                        }}
                    >
                        <CardTitle
                            className="h1 text-center"
                            style={{ fontSize: 100, color: "deeppink" }}
                        >
                            Recipe App
                        </CardTitle>
                        <CardText
                            className="h6 text-center"
                            style={{ color: "violet" }}
                        >
                            Let’s rediscover some of our all-time favorite foods
                            for a cozy fall!
                        </CardText>
                    </CardImgOverlay>
                </Card>
                <Row className="d-flex justify-content-center">
                    <Col md="3" offset="6">
                        <Card>
                            <Input
                                type="search"
                                className="form-control p-3"
                                onChange={onSearchHandler}
                                value={search}
                                placeholder="Type to search..."
                            />
                        </Card>
                    </Col>
                </Row>
                <CardGroup className="p-0 d-flex justify-content-center align-items-center">
                    <Row className="px-5">
                        {searched.map((e) => (
                            <RecipeCard
                                key={e._id}
                                title={e.name}
                                description={e.description}
                                category={e.category}
                            />
                        ))}
                    </Row>
                </CardGroup>
                <Footer fluid />
            </div>
        </div>
    );
}

export default Home;
