import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllFriends({ name }) {
    return (
<Row className="mt-4">
        <Col xs={3}>
            <div className="profile-image h-60 w-60 group-img">
                <img src="/images/dummy.png" className="img-responsive" />
            </div>
        </Col>
        <Col xs={6} className="d-flex align-items-center">
            <div className="d-flex flex-column justify-content-start profile-info">
                <h6 className="profile-name mb-1">{name}</h6>
                <div className="group-mutuals">
                    <div className="mutual-profile">
                    <img src="/images/dummy.png" className="h-100 w-100 rounded-5"/>
                    </div>
                    <div className="mutual-profile">
                    <img src="/images/dummy.png" className="h-100 w-100 rounded-5" />
                    </div>
                    <div className="mutual-profile">
                    <img src="/images/dummy.png" className="h-100 w-100 rounded-5" />
                    </div>
                    <div className="mutual-profile">
                        <img src="/images/dummy.png" className="h-100 w-100 rounded-5" />
                    </div>
                </div>
            </div>
        </Col>
        <Col xs={3} className="d-flex align-items-center justify-content-center">
            <Link className="btn join col w-100v h-50 p-0">Join</Link>
        </Col>
    </Row>
    )
}