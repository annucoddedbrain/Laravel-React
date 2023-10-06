import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import FindFriend from "../../components/FindFriends";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

export default function AllFriends() {
    return (
        <Layout>
            <Header />
            <header id="header" className="border d-flex header justify-content-between px-3 py-3 rounded shadow mb-3 flex-column flex-lg-row">
                <Link to="/friends" className="btn  shadow-bottom friendrequest"> Suggestions</Link>
                <Link to="/find_friends" className="btn  shadow-bottom friendrequest">Friend Request</Link>
                <Link to="/add_friends" className="btn   btn-accent shadow-bottom friendrequest"> All Friends</Link>
            </header>
            <div className="h-100v bg-light w-100">
                <Row className=" border-bottom">
                    <Col xs={12} >
                        <h5> <FaArrowLeft /> All Friends</h5>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><MdOutlineSearch/></InputGroup.Text>
                            <Form.Control
                                placeholder="Search Friends"
                                aria-label="Search Friends"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Container fluid>
                    <p>12,100 friends</p>
                    <Row className="mt-4">
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Rakhi Chaudhary" />
                        </Col>
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Vishesh Thakur" />
                        </Col>
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Amit Rajput" />
                        </Col>
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Arvind Gautam" />
                        </Col>
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Rajesh Sharma" />
                        </Col>
                        <Col xs={6} className="mb-3">
                            <FindFriend name="Ishan Khan" />
                        </Col>
                    </Row>
                </Container>
            </div>

        </Layout>
    )
}
