import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Temple from "./pages/Temple";
import Chat from "./pages/Chat";
import Community from "./pages/community";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import FindFriends from "./pages/FindFriends";
import AllFriends from "./pages/AllFriends";
import Addtemple from "./pages/Addtemple";
import Uploadtemple from "./pages/Uploadtemple";

import Admin, { Saurav, ATemples, AUsers } from "./admin";
import EditPost from "./pages/EditPost";

function Main() {
    return (
        <Routes>
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/profile" exact={true} element={<Profile />} />
            <Route path="/temple" exact={true} element={<Temple />} />
            <Route path="/chat" exact={true} element={<Chat />} />
            <Route path="/groups" exact={true} element={<Groups />} />
            <Route path="/friends" exact={true} element={<Friends />} />
            <Route path="/community" exact={true} element={<Community />} />
            <Route path="/Friends" exact={true} element={<Friends />} />
            <Route path="/Addtemple" exact={true} element={<Addtemple />} />
            <Route path="/Uploadtemple" exact={true} element={<Uploadtemple />} />
            <Route path="/find_friends" exact={true} element={<FindFriends />} />
            <Route path="/all_friends" exact={true} element={<AllFriends />} />
            <Route path="/edit_post" exact={true} element={<EditPost />} />

            {/* Admin Routes */}
            <Route path="admin" >
                <Route index element={<Admin />}/>
                <Route path="dashboard" element={<h2>DashBoard</h2>} exact></Route>
                <Route path="profile" element={<Saurav />} exact></Route>
                <Route path="temples" element={<ATemples />} exact></Route>
                <Route path="users" element={<AUsers />} exact></Route>
            </Route>

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

