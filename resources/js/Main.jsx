import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";


function Main() {
    return (
        <Routes>
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/profile" exact={true} element={<Profile />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

if (document.querySelector("#root")) {
    const root = createRoot(document.querySelector("#root"));

    root.render(
        // <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
        // </React.StrictMode>
    )
}

