import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineVideoCamera, AiOutlineSearch, AiOutlineMore } from "react-icons/ai";
import { MdGroups2, MdChat, MdMoreVert, MdOutlineSearch, MdMenu, MdKeyboardVoice, MdAdd, MdOutlineEmojiEmotions } from "react-icons/md";
import { Form, InputGroup } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";




export default function community() {
    return(
        <Layout className="pt-0">
            <Container fluid>
                <Row>
                    <Col xs={5} className=" ">
                        <Row className="border-bottom community">
                            <Col xs={2}>
                               <Link className="fs-3 justify-content-center text-white" to="/chat"><MdOutlineKeyboardBackspace/></Link>
                            </Col>
                            <Col xs={7}>
                                <h4 className="my-3 text-white">Communities</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="p-0">
                                <img src="/images/community1.jpg" className="img-responsive h-100 opacity-25"/>
                            </Col>
                        </Row>
                    </Col>


                    <Col xs={7}>
                        <Row className="nnn py-2">
                            <Col xs={2}>
                                <div className="profile-image">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={6} className="d-flex align-items-center">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <p className="profile-name mt-3">Sameer Tomar</p>
                                </div>
                            </Col>
                            <Col xs={4} className="d-flex align-items-center justify-content-end gap-2 mb-3">
                                <AiOutlineVideoCamera className="fs-4 "></AiOutlineVideoCamera>
                                <AiOutlineSearch className="fs-4  mx-4"></AiOutlineSearch>
                                <AiOutlineMore className="fs-4"></AiOutlineMore>

                            </Col>


                        </Row>

                        <div className="chat-page">
                            <div className="chats">
                                <div className="received-chats">
                                    <div className="received-msg ">
                                        <div className="received-msg-inbox">
                                            <p>Hi, any update of Today ?</p>
                                            <span className="time">18:06 PM  </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="outgoing-chats">
                                    <div className="outgoing-msg">
                                        <div className="outgoing-chats-msg">
                                            <p className="multi-msg">Hi Sameer
                                            </p>
                                            <p className="multi-msg">No there is no update for today</p>
                                            <span className="time">18:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="received-chats">
                                    <div className="received-msg ">
                                        <div className="received-msg-inbox">
                                            <p>Ok Sir,Thankyou</p>
                                            <span className="time">19:24 PM  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="msg-bottom">

                            <div className="group">
                                <span className="input-group-text send-icon"><MdOutlineEmojiEmotions className="fs-4"></MdOutlineEmojiEmotions></span>
                                <span className="input-group-text send-icon"><MdAdd className="fs-4"></MdAdd></span>
                                <input type="text" className="control" placeholder="Type a msg"></input>
                                    <div className="input-group-append ">
                                        <span className="input-group-text send-icon"><MdKeyboardVoice className="fs-4"></MdKeyboardVoice>
                                        </span>
                                    </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Layout>
    )
}
