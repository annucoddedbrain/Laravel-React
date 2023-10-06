import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Friend from "../../components/Friends";




export default function Friends({name}) {
    return (
        <Layout>
            <Header />
            <header id="header" className="border d-flex header justify-content-between px-3 py-3 rounded shadow mb-3 flex-column flex-lg-row">
                <Link  className="btn btn-accent shadow-bottom friendrequest"> Suggestions</Link>
                <Link to="/find_friends" className="btn  shadow-bottom friendrequest">Friend Request</Link>
                <Link to="/add_friends"className="btn  shadow-bottom friendrequest"> All Friends</Link>
            </header>
            <Friend name="Rakhi Chaudhary" />
            <Friend name="Sameer Arora"/>
            <Friend name="Jai Bholenath"/>
            <Friend name="Sameer Arora"/>
            <Friend name="Jai Bholenath"/>
        </Layout>
    )
}


