import React from "react";
import { Routes, Route } from "react-router-dom";

import Agenda from "./pages/Agenda";
import Home from "./pages/Home";
import About from "./pages/About";

class Main extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/agenda" element={<Agenda />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        )
    }
}

export default Main;