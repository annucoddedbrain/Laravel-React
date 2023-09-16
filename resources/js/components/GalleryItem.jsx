import React from "react";
import { BsFillChatFill, BsFillGeoAltFill, BsFillHeartFill } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function GalleryItem({ onClick, image, name, loaction}) {

    return (
        <div className="gallery rounded-4 overflow-hidden shadow" onClick={onClick}>

            <div className="gallery-item" >

                <img src={image.src} className="gallery-image w-100  shadow-bottom" alt={image.alt} />
                {/* <div className="text-body">abc</div> */}

                <div className="gallery-item-info">

                    <ul className="m-0 p-0 d-flex gap-3">
                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><BsFillHeartFill /> 56</li>
                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><BsFillChatFill /> 2</li>
                    </ul>

                </div>
            </div>
            <Row className="m-auto">
                <Col xs={6}>
                    <p>{name}</p>
                </Col>
                <Col xs={6} className="d-flex gap-2 ">
                    <Link className="text-body"><BsFillGeoAltFill className="fs=4" /></Link>
                    <p>{loaction}</p>
                </Col>
            </Row>
        </div>
    )
}