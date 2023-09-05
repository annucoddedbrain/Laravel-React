import React, { useState } from "react";
import { Button } from "react-bootstrap";

import PropTypes from "prop-types"

function FriendSuggestion({name, image}){

    const[isFollowed, setFollow] = useState( false );

    const follow = () => {
        setFollow( !isFollowed );
    }

    return(
        <li>
            <div><img src={image.src} alt={image.alt} /></div>
            <div>{name}</div>
            <div><Button onClick={follow}>{isFollowed ? "Following": "Follow"}</Button></div>
        </li>
    )
}

FriendSuggestion.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
}

export default FriendSuggestion;