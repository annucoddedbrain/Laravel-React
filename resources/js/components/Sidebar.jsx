import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineHome, MdOutlineTempleHindu, MdOutlineForum, MdOutlinePlace, MdOutlineGroups, MdOutlineLiveTv, MdOutlineHelpOutline, MdNotificationsNone } from 'react-icons/md';
import { TbUserSearch } from 'react-icons/tb';
import {Scrollbar} from 'smooth-scrollbar-react';

import Dummy from '../../images/dummy.png';

export default function Sidebar() {

    const scrollbar = useRef(null);

    return (
        <aside className="aside bg-light">
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
                            <Link to="/" className="nav-link d-flex"> <MdOutlineHome className="me-3 fs-4" />Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link d-flex"> <MdOutlineTempleHindu className="me-3 fs-4" />Temples</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link d-flex"> <TbUserSearch className="me-3 fs-4" />Friends</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link d-flex"> <MdOutlinePlace className="me-3 fs-4" />Nearby Temples</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link d-flex"> <MdOutlineGroups className="me-3 fs-4" />Groups</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link d-flex"> <MdOutlineLiveTv className="me-3 fs-4" />Live Aarti</Link>
                        </Nav.Item>
                    </Nav>
                    
                </Scrollbar>
                <Nav as="ul" className="flex-column position-fixed bottom-0 mb-3">
                    <Nav.Item as="li" className="py-3 d-flex justify-content-center">
                        <Link><MdOutlineHelpOutline className="fs-4"/></Link>
                        </Nav.Item>
                    <Nav.Item as="li" className="py-3 d-flex justify-content-center">
                        <Link><MdNotificationsNone className="fs-4"/></Link>
                        </Nav.Item>
                    <Nav.Item as="li" className="py-3 d-flex">
                        <Link to="/profile" className="img-circle"><img className="img-thumbnail" src={Dummy} /></Link>
                    </Nav.Item>
                </Nav>
                </Navbar>
                
               
            </Container>


        </aside>
    )
}