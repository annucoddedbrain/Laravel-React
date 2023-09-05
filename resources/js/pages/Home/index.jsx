import React, { useEffect, useState } from "react";
import "./style.scss";
import Layout from "../../components/Layout";

import Dummy from '../../../images/dummy.png';
import FriendSuggestion from "../../components/FriendSuggestion";
import Header from "../../components/Header";

export default function Home(){

    const [dummy, setDummy] = useState([]);

    useEffect(()=>{
        setDummy([
            {
                "name": "Annu",
                "image": {
                    src: Dummy,
                    alt: "Dummy"
                }
            },
            {
                "name": "Saurav",
                "image": {
                    src: Dummy,
                    alt: "Dummy"
                }
            },
            {
                "name": "Vishu",
                "image": {
                    src: Dummy,
                    alt: "Dummy"
                }
            },
        ])
    },[]);


    function addItem(){
        let data = 
            {
                "name": "Vishu",
                "image": {
                    src: Dummy,
                    alt: "Dummy"
                }
            };
        

        setDummy([data, ...dummy])
    }

    return(
        <Layout>
            <Header />
            <h1>Home</h1>

            <button onClick={addItem}>Add </button>
            <ul>
            {dummy.map( (item, key) => <FriendSuggestion name={item.name} image={item.image} key={key}/>)}
            </ul>

        </Layout>
    )
}