import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FindFriend({ name }) {
    return (
        <Row className="shadow mx-1 rounded-3">
            <Col xs={4} className="d-flex p-3">
                <img src="/images/dummy.png" className="img-responsive" />
            </Col>
            <Col xs={8} className="d-flex flex-column justify-content-between my-3">
                <h4 className="mt-4">{name}</h4>
                <div className="d-flex gap-5 justify-content-between">
                    <Link className="btn btn-danger w-50 rounded-2 header-button"> Confirm</Link>
                    <Link className="btn bg-dark-subtle w-50 rounded-2 "> Delete</Link>
                </div>
            </Col>
        </Row>
    )
}