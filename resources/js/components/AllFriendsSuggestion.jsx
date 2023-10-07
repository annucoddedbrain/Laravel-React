import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineChat } from "react-icons/hi";
import { LiaUserTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function AllFriendsSuggestion({ name, mutual }) {
    return (
        <Row className="mt-4">
            <Col xs={2}>
                <div className="profile-image h-60 w-60 group-img">
                    <img src="/images/dummy.png" className="img-responsive" />
                </div>
            </Col>
            <Col xs={6}>
                <h5>{name}</h5>
                <div className="group-mutuals">
                    <div className="mutual-profile">
                        <img src="/images/dummy.png" className="h-100 w-100 rounded-5" />
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
                    <h5>{mutual}</h5>
                </div>
            </Col>
            <Col xs={4} className="d-flex justify-content-evenly">
                <Link className="text-body ">
                    <Dropdown>
                        <Dropdown.Toggle className="d:after-none btn-none">
                            <BiDotsHorizontalRounded />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link className="dropdown-item dropdown-bg:active-none"> 
                            <Row>
                                <Col xs={4} className="d-flex justify-content-center align-items-center fs-4"><HiOutlineChat/></Col>
                                <Col xs={8} className="p-0">Message</Col>
                            </Row>
                            </Link>
                            <Link className="dropdown-item dropdown-bg:active-none"> 
                            <Row>
                                <Col xs={4} className="d-flex justify-content-center align-items-center fs-4"><LiaUserTimesSolid/></Col>
                                <Col xs={8} className="p-0">Unfollow</Col>
                            </Row>
                            </Link>
                            <Link className="dropdown-item dropdown-bg:active-none">
                            <Row>
                                <Col xs={4} className="d-flex justify-content-center align-items-center fs-4"><HiOutlineChat/></Col>
                                <Col xs={8} className="p-0">Message</Col>
                            </Row>
                            </Link>
                            <Link className="dropdown-item dropdown-bg:active-none"> 
                            <Row>
                                <Col xs={4} className="d-flex justify-content-center align-items-center fs-4"><HiOutlineChat/></Col>
                                <Col xs={8} className="p-0">Message</Col>
                            </Row>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </Link>
            </Col>
        </Row>
    )
}