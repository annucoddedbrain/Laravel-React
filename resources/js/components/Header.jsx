import React from "react";
import { Form, InputGroup, Nav } from "react-bootstrap";
import { MdOutlineForum, MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header" className="border d-flex header justify-content-between px-3 py-3 rounded shadow mb-3 flex-column flex-lg-row">
            <Form>
                <InputGroup>
                    <Form.Control type="text" placeholder="Search..."></Form.Control>
                    <InputGroup.Text><MdOutlineSearch className="fs-4"/></InputGroup.Text>
                </InputGroup>
            </Form>
            <Nav as="ul" className="d-flex align-items-center gap-5 ">
                <Nav.Item as="li"><Link className="border border-3 p-1 rounded-5  text-body bg-body-secondary" to="/chat"><MdOutlineForum className="fs-4 icon"/></Link></Nav.Item>
                <Nav.Item as="li"><Link className="btn btn-danger header-button"> + Add Temple</Link></Nav.Item>
            </Nav>
        </header>
    )
}

export default Header;
