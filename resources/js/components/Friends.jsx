import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Friend({name}) {
    return (
        <div>
            <Row className="w-100 mb-4 ">
                <Col xs={6}>
                    <Row className="shadow-bottom mx-2">
                        <Col xs={5}>
                            <img src="/images/dummy.png" className="img-responsive w-auto h-75 m-4 shadow-bottom" />
                        </Col>
                        <Col xs={7} className=" my-auto text-center ">
                        <h6 className="profile-name mb-1">{name}</h6>
                            <Link className="btn btn-accent shadow-bottom friendrequest my-4"> Add Friends</Link>
                            <Link className="btn bg-dark-subtle shadow-bottom friendrequest"> Remove</Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row className="shadow-bottom mx-2">
                        <Col xs={5}>
                            <img src="/images/dummy.png" className="img-responsive w-auto h-75 m-4 shadow-bottom" />
                        </Col>
                        <Col xs={7} className=" my-auto text-center ">
                        <h6 className="profile-name mb-1">{name}</h6>
                            <Link className="btn btn-accent shadow-bottom friendrequest my-4"> Add Friends</Link>
                            <Link className="btn bg-dark-subtle shadow-bottom friendrequest"> Remove</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}