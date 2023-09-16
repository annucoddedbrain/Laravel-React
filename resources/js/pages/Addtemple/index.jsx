import React from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import {  Col, Container, Row } from "react-bootstrap";
import {MdPhotoSizeSelectActual  } from "react-icons/md";
import { Link } from "react-router-dom";






export default function Addtemple() {
    return(
        <Layout className="pt-0">
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <Row className="my-3 bg-dark-subtle">
                            {/* <MdPhotoSizeSelectActual/> */}
                            <Link className=" btn-btn text-center text-black"><h5 className="my-2">Select Multiple</h5></Link>
                        </Row>

                    </Col>

                    <Col xs={1}>

                    </Col>


                    <Col xs={5} className="bg-dark-subtle h-100v my-3">
                        <Row>
                            <Col xs={4}>
                              <img src="/images/kedarnath1.jpg" className="img-responsive my-3 mx-2"/>
                            </Col>
                            <Col xs={4}>
                                <img src="/images/kashi.jpg" className="img-responsive my-3 mx-1"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/lingaraja.jpg" className="img-responsive my-3 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                                <img src="/images/amarnath.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/dwarkadhish.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>

                            <Col xs={4}>
                                <img src="/images/jagannath3.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kedarnath1.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/amarnath.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/jagannath3.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                              <img src="/images/kashi.jpg" className="img-responsive my-2 mx-2"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/sri virupaksha.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                            <Col xs={4}>
                              <img src="/images/lingaraja.jpg" className="img-responsive my-2 mx-1"/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>


        </Layout>
    )
}
