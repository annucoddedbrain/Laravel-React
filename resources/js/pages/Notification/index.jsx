import React, { useState } from "react";
import "./style.scss";
import Toast from 'react-bootstrap/Toast';
import { Button, Col, Row } from "react-bootstrap";
import { MdNotificationsNone } from 'react-icons/md';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import NotificationSugg from "../../components/NotificationSugg";


export default function Notification({ name, ...props }) {
    const [show, setShow] = useState(false);

    return (
        <Layout>
            <Row className="">
                <Col xs={2}>
                    {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
                    <Link onClick={() => setShow(true)}><MdNotificationsNone className="fs-4 icon" /></Link>
                </Col>
                <Col xs={10}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000}>
                        <Toast.Header>
                            <strong className="me-auto">Notification</strong>
                        </Toast.Header>
                        <Toast.Body>
                           <NotificationSugg/>
                           <NotificationSugg/>
                           <NotificationSugg/>
                           <NotificationSugg/>
                           <NotificationSugg/>
                           <NotificationSugg/>
                           <NotificationSugg/>

                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Layout>

    );
}
