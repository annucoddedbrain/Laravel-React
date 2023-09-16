import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NotificationSugg({name}) {
    return (
        <Row className="m-1 border-bottom w-100">
        <Col xs={3}>
            <div className="profile-image h-60 w-60 group-img">
                <img src="/images/dummy.png" className="img-responsive" />
            </div>
        </Col>
        <Col xs={6} className="d-flex align-items-center">
           <p>Soman Rawat Starts following you</p>
        </Col>
        <Col xs={3} className="d-flex align-items-center justify-content-center">
            <Link className="btn btn-danger header-button"> Follow</Link>
        </Col>
    </Row>
    )
}
