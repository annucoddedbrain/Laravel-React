import React, { useState } from "react";
import "./style.scss";
import Layout from "../../components/Layout";
import { Card, Col, Container, Form, FormCheck, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineAttachment, MdPhotoCamera } from "react-icons/md";





export default function Uploadtemple() {
    const [havePriestDetails, setHavePriestDetails] = useState(true)
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <Row>
                            <Col xs={1}>
                                <div className="profile-image">
                                    <img src="/images/dummy.png" className="img-responsive" />
                                </div>
                            </Col>
                            <Col xs={8} className="d-flex align-items-center mx-4">
                                <div className="d-flex flex-column justify-content-start profile-info">
                                    <h5 className="profile-name mb-1">Sonam Rawat</h5>
                                </div>
                            </Col>
                        </Row>

                        <form id="contact" action="" method="post" className="my-4">

                            <fieldset>
                                <input className="shadow-bottom" placeholder="Temple name" type="text" tabIndex="1" required autoFocus></input >
                            </fieldset>
                            <fieldset>
                                <input className="shadow-bottom" placeholder=" Address" type="text" tabIndex="2" required></input>
                            </fieldset>
                            <fieldset>
                                <input className="shadow-bottom w-100" placeholder="Tags" type="text" tabIndex="3" required></input>
                            </fieldset>
                            <fieldset>
                                <input className="shadow-bottom" placeholder="Location" type="text" tabIndex="4" required ></input>
                            </fieldset>
                        </form>

                    </Col>

                    <Col xs={5}>


                        <Row>
                            <Col xs={12} className="mt-5" >
                                <div className="w-80 h-50 rounded rounded-2 border my-4" style={{
                                    minHeight: 200
                                }}>

                                    <Form className="d-flex align-items-center justify-content-center h-100">
                                        <Form.Label htmlFor="upload-files" className="cursor-pointer d-flex flex-column justify-content-center align-items-center gap-2" >
                                            <MdOutlineAttachment className="fs-4" />                                            Attach files
                                        </Form.Label>
                                        <Form.Control id="upload-files" type="file" style={{
                                            appearance: "none",
                                            opacity: 0,
                                            width: 0,
                                            height: 0,
                                            padding: 0,
                                        }} accept="image/*" capture="camera" />
                                    </Form>


                                </div>
                            </Col>
                        </Row>


                    </Col>

                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={6}>
                                    <fieldset >
                                        < textarea placeholder="Establishment" type="text" tabIndex="5" required className="w-100 h-100 comment shadow-bottom border"></textarea>
                                    </fieldset>

                                </Col>

                                <Col xs={6}>
                                    <fieldset>
                                        < textarea placeholder="History" type="text" tabIndex="6" required className="w-100 h-100 comment shadow-bottom border"></textarea>
                                    </fieldset>
                                </Col>
                            </Row>
                        </Col>
                        <Row>
                            <h5>Priest Details</h5>
                        </Row>

                        <Row className="my-3">
                            <Col>
                                <FormCheck id="dnhp" label="I don't have priest details." onChange={() => setHavePriestDetails(!havePriestDetails)} />
                            </Col>
                        </Row>
                        {havePriestDetails && <Row>
                            <Col xs={4}>
                                <fieldset>
                                    <Form.Control placeholder="Priest Name" type="text" />
                                </fieldset>
                            </Col>
                            <Col xs={4}>
                                <fieldset>
                                    <Form.Control placeholder="Priest Role" type="text"></Form.Control>
                                </fieldset>
                            </Col>
                            <Col xs={4}>
                                <fieldset>
                                    <Form.Control placeholder="Priest Mob No." type="integer"></Form.Control >
                                </fieldset>
                            </Col>
                        </Row>}


                        <Row>
                            <Col xs={4}>
                                <Link className="btn btn-light border shadow-bottom w-100 p-4 my-3 selfie_with_temple" to=""> <MdPhotoCamera className="d-flex mx-auto fs-4" />Selfie With Temple</Link>
                            </Col>
                            <Col xs={4}>
                                <Link className="btn btn-light border shadow-bottom w-100 p-4 my-3 Temple_Front" to=""> <MdPhotoCamera className="d-flex mx-auto fs-4" />Temple Front</Link>
                            </Col>
                            <Col xs={4}>
                                <Link className="btn btn-light border shadow-bottom w-100 p-4 my-3 More_Images" to=""> <MdPhotoCamera className="d-flex mx-auto fs-4" />More Images</Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={4}>
                                        <label htmlFor="appt">Temple Morning Open time:</label>
                                        <input type="time" id="appt" name="appt"></input>
                                    </Col>

                                    <Col xs={4}>
                                        <label htmlFor="appt">Temple Evening Open time:</label>
                                        <input type="time" id="appt" name="appt"></input>
                                    </Col>
                                </Row>



                                <Row className="my-2">
                                    <Col xs={4}>
                                        <label htmlFor="appt">Temple Morning Close time:</label>
                                        <input type="time" id="appt" name="appt"></input>
                                    </Col>

                                    <Col xs={4}>
                                        <label htmlFor="appt">Temple Evening Close time:</label>
                                        <input type="time" id="appt" name="appt"></input>
                                    </Col>
                                </Row>




                            </Col>

                            <Row className="my-3">
                                <Col xs={12} className="d-flex align-items-center justify-content-center">
                                    <Link className="btn btn-danger header-button" to="/Uploadtemple">Upload Temple</Link>

                                </Col>
                            </Row>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </Layout>
    )
}
