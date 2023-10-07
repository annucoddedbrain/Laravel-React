import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Row, Col, Button, Modal, ModalHeader, Dropdown, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdMoreHoriz, MdOutlineSearch } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { FiBookmark, FiSend, FiSmile } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import GalleryItem from "../../components/GalleryItem";

export default function Temple() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const images = [
        {
            src: '/images/temp1.jpg',
            alt: '',

        },
        {
            src: '/images/temp2.jpg',
            alt: ''
        },
        {
            src: '/images/temp3.jpg',
            alt: ''
        },
        {
            src: '/images/temp4.jpg',
            alt: ''
        },
        {
            src: '/images/temp5.jpg',
            alt: ''
        },
        {
            src: '/images/temp6.jpg',
            alt: ''
        },
        {
            src: '/images/temp7.jpg',
            alt: ''
        },
        {
            src: '/images/temp1.jpg',
            alt: ''
        },
        {
            src: '/images/temp2.jpg',
            alt: ''
        },
        {
            src: '/images/temp3.jpg',
            alt: ''
        },
        {
            src: '/images/temp4.jpg',
            alt: ''
        },
        {
            src: '/images/temp5.jpg',
            alt: ''
        },
        {
            src: '/images/temp6.jpg',
            alt: ''
        },
        {
            src: '/images/temp7.jpg',
            alt: ''
        },
        {
            src: '/images/temp1.jpg',
            alt: ''
        },
        {
            src: '/images/temp2.jpg',
            alt: ''
        },
        {
            src: '/images/temp3.jpg',
            alt: ''
        },
        {
            src: '/images/temp4.jpg',
            alt: ''
        },
        {
            src: '/images/temp5.jpg',
            alt: ''
        },
        {
            src: '/images/temp6.jpg',
            alt: ''
        },
        {
            src: '/images/temp7.jpg',
            alt: ''
        },


    ]

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <Layout>
            <Row className="border shadow-bottom px-2 m-2 py-2 rounded shadow mb-3 flex-column flex-lg-row">
                <Col xs={4} className=" border p-0">
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                            <Form className="w-100">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Temple Name" className="rounded-0 "></Form.Control>
                                    <InputGroup.Text className="rounded-0"><MdOutlineSearch className="fs-4" /></InputGroup.Text>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="border ">
                    <Row className="d-flex justify-content-evenly align-items-center">
                        <Col xs={8} className="d-flex justify-content-center">
                        <h6 className="mt-2">Temple Location</h6>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-evenly align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle className="text-muted border-0 bg-body">
                           
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Uttar Pardesh</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Pune</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                       </Col>
                    </Row>
                </Col>
                <Col xs={3} className="d-flex justify-content-center border border ">
                    <Row className="d-flex justify-content-evenly align-items-center">
                        <Col xs={9} className="d-flex justify-content-center">
                        <h6 className="mt-2">Your Location</h6>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-evenly align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle className="text-muted border-0 bg-body"></Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Uttar Pardesh</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Pune</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                       </Col>
                    </Row>
                    
                </Col>
                <Col xs={1} className=" btn btn-accent rounded-0 d-flex justify-content-center align-items-center border border ">
                    <MdOutlineSearch className="fs-4 " />
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="gap-3 count-3 mossonary">
                    {shuffle(images).map((image, k) => <GalleryItem image={image} name="Hanuman Mandir" loaction="Faridabad,Haryana" onClick={handleShow} key={k} />)}
                    {shuffle(images).map((image, k) => <GalleryItem image={image} name="Prem Mandir" loaction="Faridabad,Haryana" onClick={handleShow} key={k} />)}
                    {shuffle(images).map((image, k) => <GalleryItem image={image} name="Ram Mandir" loaction="Faridabad,Haryana" onClick={handleShow} key={k} />)}

                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} className="temple-modal">

                <Modal.Body >
                    <Row>
                        <Col xs={6}>
                            <div>
                                <img src="/images/temp2.jpg" className="img-responsive w-75 m-lg-5" />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="align-items-center border-bottom d-flex pb-2 justify-content-evenly">
                                <Row className="w-100">
                                    <Col xs={10} className="d-flex">
                                        <div className="profile-image">
                                            <img src="/images/dummy.png" className="img-responsive " />
                                        </div>
                                        <div className="d-flex gap-3 align-items-center mx-3">
                                            <p className="profile-name mb-1 gap-2">Sameer </p>
                                            <Link className="text-decoration-none"> <p className="m-0">Follow</p></Link>
                                        </div>

                                    </Col>
                                    <Col xs={2}>
                                        <div className="mx-4 my-3">
                                            <Link className="text-body mx-4"> <MdMoreHoriz /> </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="border-bottom ">
                                <div className="align-items-center  d-flex gap-3 my-3">
                                    <div className="profile-image">
                                        <img src="/images/dummy.png" className="img-responsive" />
                                    </div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <p className="profile-name mb-1">Sameer, it's very beautiful place😍 </p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam asperiores sapiente in deserunt dignissimos quasi vel quos autem, nam placeat, necessitatibus inventore similique molestiae quibusdam laborum quo alias a?
                                        Excepturi incidunt reiciendis dolorum, amet, delectus laborum, perspiciatis ut non corrupti reprehenderit molestiae! Fugiat, ex ut magnam sit odio fuga architecto! Nam facilis nobis fuga ab, nesciunt perferendis quo laudantium.
                                        Impedit dicta nulla architecto voluptas, beatae aperiam vero repudiandae sed qui fugiat. Et repellendus hic corrupti, fugit asperiores qui a consequuntur ipsum laboriosam! Tempore totam accusantium amet rerum perspiciatis? Officiis!
                                        Fugiat impedit ex ullam minus et harum officia esse laboriosam magnam placeat, a accusamus perferendis omnis excepturi iusto labore, facere fuga dignissimos suscipit maxime tempore, quis corrupti autem? Dolores, laboriosam!
                                        Commodi vero saepe minima quia incidunt? Eius dolore soluta exercitationem laboriosam illo debitis alias eveniet sint. Molestiae fuga repudiandae, sequi molestias libero expedita quasi excepturi facere quia, ad odit eveniet.
                                    </p>
                                </div>
                            </div>
                            <div className="my-3 border-bottom ">
                                <Row>
                                    <Col xs={10}>
                                        <Link className="text-body text-decoration-none"> <BiHeart className="fs-4" /> </Link>
                                        <Link className="text-body text-decoration-none"> <FiMessageCircle className="fs-4 mx-3" /> </Link>
                                        <Link className="text-body text-decoration-none"> <FiSend className="fs-4 " /> </Link>
                                        <p>16,500 Likes</p>
                                    </Col>
                                    <Col xs={2}>
                                        <Link className="text-body text-decoration-none"><FiBookmark className="fs-4" /></Link>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex gap-2">
                                <FiSmile className="fs-4" />
                                <p>Add a comment</p>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal>
        </Layout>
    )
}