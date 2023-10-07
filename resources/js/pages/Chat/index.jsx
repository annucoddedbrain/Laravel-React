import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineVideoCamera, AiOutlineSearch, AiOutlineMore } from "react-icons/ai";
import { MdGroups2, MdChat, MdMoreVert, MdOutlineSearch, MdMenu, MdKeyboardVoice, MdAdd, MdOutlineEmojiEmotions } from "react-icons/md";
import { Form, InputGroup } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";


export default function Chat() {

    const chatHeaderRef = useRef();
    const chatFooterRef = useRef();

    const [chatBodyHeight, setChatBodyHeight] = useState('calc(100% - 130px )');

    useEffect(() => {
        const hfHeight = chatHeaderRef.current.clientHeight + chatFooterRef.current.clientHeight;

        setChatBodyHeight(`calc(100% - ${hfHeight}px)`);

    }, []);

    return (
        <Layout className="pt-0 pe-0 pb-0">
            <Container fluid >
                <Row >
                    <Col xs={5} className="scroll">
                        <Row className="nnn py-2">
                            <Col xs={3}>
                                <div className="profile-image">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>

                            <Col xs={9} className="abc d-flex align-items-center justify-content-end gap-1  ">
                                <Link className="fs-3  mx-4 icon" to="/community"><MdGroups2 /></Link>
                                <Link className="fs-4 mx-4  icon"><MdChat /></Link>
                                <Link className="fs-4  icon"><MdMoreVert /></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={11} className="mt-3" >
                                <Form>
                                    <InputGroup className="nnn">

                                        <InputGroup.Text><MdOutlineSearch className="fs-4" /></InputGroup.Text>
                                        <Form.Control type="text" placeholder="Search and start new chat" className="nnn"></Form.Control>
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col xs={1} className="mt-3">
                                <BiFilter className="fs-3 align"></BiFilter>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-3 mb-2">
                                    <img src="/images/dummy.png" className="img-responsive " />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center mt-3">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1">How are you?</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Rishabh Gupta</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">Heyy</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Fine-Groups</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">Hii All</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">nhii</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Samar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">ok</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">How are you?</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">How are you?</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">How are you?</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                        <Row className="border-bottom">

                            <Col xs={2}>
                                <div className="profile-image mt-1">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center ">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h6 className="profile-name mb-1 ">Sameer Tomar</h6>
                                    <h6 className="fw-600 m-0 p-0 profile-username text-start text-muted mb-1 ">How are you?</h6>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <p className="mt-4 mx-4">2:30 pm</p>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={7} className="p-0">
                        <div className="chat-wrapper">
                            <div className="chat-header px-4 py-2 d-flex" ref={chatHeaderRef}>
                                <Col xs={1}>
                                    <div className="profile-image">
                                        <img src="/images/dummy.png" className="img-responsive" />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="d-flex flex-column justify-content-start profile-info mx-3">
                                        <p className="profile-name mt-3">Sameer Tomar</p>
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end gap-2">
                                    <Link><AiOutlineVideoCamera className="fs-4 " /></Link>
                                    <Link><AiOutlineSearch className="fs-4 mx-4" /></Link>
                                    <Link><AiOutlineMore className="fs-4" /></Link>

                                </Col>


                            </div>

                            <div className="chat-page chat-body" style={{
                                height: chatBodyHeight
                            }}>
                                <div className="chats">
                                    <div className="conversation receive">
                                        <div className="message-wrapper">
                                            <span className="message">Hello,</span>
                                            <span className="time">12:00</span>

                                        </div>
                                    </div>
                                    <div className="conversation send">
                                        <div className="message-wrapper">
                                            <span className="message">Hii</span>
                                            <span className="time">12:05</span>

                                        </div>
                                    </div>
                                    <div className="conversation send">
                                        <div className="message-wrapper">
                                            <span className="message">How are you</span>
                                            <span className="time">12:05</span>

                                        </div>
                                    </div><div className="conversation receive">
                                        <div className="message-wrapper">
                                            <span className="message">I Am Fine</span>
                                            <span className="time">12:15</span>

                                        </div>
                                    </div>
                                    <div className="conversation send">
                                        <div className="message-wrapper">
                                            <span className="message">Good</span>
                                            <span className="time">12:30</span>

                                        </div>
                                    </div>
                                    <div className="conversation">
                                        <div className="message-wrapper">
                                            <span className="message">Hello,</span>
                                            <span className="time">15:00</span>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="chat-footer" ref={chatFooterRef}>

                                <div className="gap-2 d-flex justify-content-between py-2 px-3">
                                    <div className="d-flex gap-3">
                                        <span className="input-group-text send-icon"><MdOutlineEmojiEmotions className="fs-4"></MdOutlineEmojiEmotions></span>
                                        <span className="input-group-text send-icon"><MdAdd className="fs-4"></MdAdd></span>
                                    </div>
                                    <input type="text" className="control" placeholder="Type a msg"></input>
                                    <div className="input-group-append ">
                                        <span className="input-group-text send-icon"><MdKeyboardVoice className="fs-4"></MdKeyboardVoice>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
