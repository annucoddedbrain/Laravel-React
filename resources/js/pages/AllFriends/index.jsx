import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import AllFriendsSuggestion from "../../components/AllFriendsSuggestion";

export default function AllFriends() {
    return (
        <Layout>
            <Header />
            <header id="header" className="border d-flex header justify-content-between px-3 py-3 rounded shadow mb-3 flex-column flex-lg-row">
                <Link to="/friends" className="btn  shadow-bottom friendrequest"> Suggestions</Link>
                <Link to="/find_friends" className="btn  shadow-bottom friendrequest">Friend Request</Link>
                <Link to="/all_friends" className="btn   btn-accent shadow-bottom friendrequest"> All Friends</Link>
            </header>
            <div className="h-100v bg-light w-100">
                <Row className=" border-bottom border-2">
                    <Col xs={12} >
                        <h5 className="p-2"> <FaArrowLeft /> All Friends</h5>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><MdOutlineSearch className="fs-4"/></InputGroup.Text>
                            <Form.Control 
                                className="bg-body-secondary"
                                placeholder="Search Friends"
                                aria-label="Search Friends"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Container fluid>
                    <Row className="friends ">
                    <h5 className="mb-0 mt-3 p-0 text-body-secondary">12,100 friends</h5>
                        <Col xs={12} className="border-bottom border-2 p-1">
                            <AllFriendsSuggestion name="Rakhi Chaudhary" mutual="100+ mutual friends" />
                        </Col>
                        <Col xs={12} className="border-bottom border-3 p-1">
                            <AllFriendsSuggestion name="Vishesh Thakur" mutual="20+ mutual friends"/>
                        </Col>
                        <Col xs={12} className="border-bottom border-3 p-1">
                            <AllFriendsSuggestion name="Amit Rajput" mutual="5+ mutual friends"/>
                        </Col>
                        <Col xs={12} className="border-bottom border-3 p-1">
                            <AllFriendsSuggestion name="Arvind Gautam" mutual="40+ mutual friends"/>
                        </Col>
                        <Col xs={12} className="border-bottom border-3 p-1">
                            <AllFriendsSuggestion name="Rajesh Sharma" mutual="10+ mutual friends"/>
                        </Col>
                        <Col xs={12} className="border-bottom border-3 p-1">
                            <AllFriendsSuggestion name="Ishan Khan" mutual="12+ mutual friends"/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </Layout>
    )
}
