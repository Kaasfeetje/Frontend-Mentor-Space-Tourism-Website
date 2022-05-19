import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crew from "./components/pages/Crew";
import Destination from "./components/pages/Destination";
import Home from "./components/pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/crew" element={<Crew />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
