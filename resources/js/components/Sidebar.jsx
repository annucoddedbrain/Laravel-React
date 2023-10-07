import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineHome, MdOutlineTempleHindu, MdOutlineForum, MdOutlinePlace, MdOutlineGroups, MdOutlineLiveTv, MdOutlineHelpOutline, MdNotificationsNone } from 'react-icons/md';
import { TbUserSearch } from 'react-icons/tb';
import { Scrollbar } from 'smooth-scrollbar-react';

import Dummy from '../../images/dummy.png';
import NotificationSugg from "./NotificationSugg";

export default function Sidebar() {

    const scrollbar = useRef(null);
    const sidebar = useRef( null );
    const [show, setShow] = useState(false);
    const [ leftPush, setLeftPush ] = useState(0);

    useEffect( () => {
        setLeftPush( sidebar.current.clientWidth );
    }, [])

    return (
        <>
            <aside className="aside bg-light" ref={sidebar}>
                <div className="fs-3 fw-bold m-0 p-3 pt-4 w-100 ps-4">
                    <Link to="/" className="navbar-brand">SanatanLok</Link>
                </div>
                <Container fluid={true} className="p-0">

                    <Navbar className="bg-light ps-4">
                        <Scrollbar
                            ref={scrollbar}
                            plugins={{
                                overscroll: {
                                    effect: "bounce"
                                }
                            }}
                            className="sidebar-overflow">

                            <Nav as="ul" className="flex-column w-100">
                                <Nav.Item as="li">
                                    <Link to="/" className="nav-link d-flex"> <MdOutlineHome className="me-3 fs-4 text" /><b className="text">Home</b></Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="/temple" className="nav-link d-flex"> <MdOutlineTempleHindu className="me-3 fs-4 icon" /><b className="text">Temples</b></Link>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <Link className="nav-link d-flex" to="/friends"> <TbUserSearch className="me-3 fs-4 icon" /><b className="text">Friends</b></Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link className="nav-link d-flex" to="/groups"> <MdOutlineGroups className="me-3 fs-4 icon" /><b className="text">Groups</b></Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link className="nav-link d-flex" to="/live-aarti"> <MdOutlineLiveTv className="me-3 fs-4 icon" /><b className="text">Live Aarti</b></Link>
                                </Nav.Item>
                            </Nav>


                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-4"></div>
                                    <div className="col-sm-12 col-md-6 col-lg-4"></div>
                                    <div className="col-sm-12 col-md-6 col-lg-4"></div>
                                </div>
                            </div>


                        </Scrollbar>
                        <Nav as="ul" className="flex-column position-fixed bottom-0 mb-3">
                            <Nav.Item as="li" className="py-3 d-flex justify-content-center">
                                <Link className="text-body"><MdOutlineHelpOutline className="fs-4 icon" /></Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="py-3 d-flex justify-content-center position-relative">
                                {/* <Link to="/notification" ><MdNotificationsNone className="fs-4 icon" /></Link> */}
                                {/* <Link className="text-body"  onClick={() => setShow(true)}><MdNotificationsNone className="fs-4 icon" /></Link> */}
                                <Link className="text-body" onClick={() => setShow(true)}><MdNotificationsNone className="fs-4 icon" /></Link>


                            </Nav.Item>


                            <Nav.Item as="li" className="py-3 d-flex">
                                <Link to="/profile" className="img-circle"><img className="img-thumbnail " src={Dummy} /></Link>
                            </Nav.Item>
                        </Nav>


                    </Navbar>


                </Container>

            </aside>

            <Toast className="position-absolute" onClose={() => setShow(false)} show={show} delay={3000} style={{
                    left: leftPush,
                    zIndex: 2,
                    top: 0,
                }}>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />
                    <NotificationSugg />

                </Toast.Body>
            </Toast>

        </>
    )
}
