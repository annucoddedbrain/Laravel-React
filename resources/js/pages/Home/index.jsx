import React, { useEffect, useState } from "react";
import "./style.scss";
import Layout from "../../components/Layout";

import Header from "../../components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaImages, FaRegSmile, FaRegComment } from "react-icons/fa";
import { FiHeart, FiSend } from "react-icons/fi";
import { MdMoreHoriz, MdMoreVert } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/pagination';
import 'swiper/scss/mousewheel';
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';
import PostCard from "../../components/PostCard";


export default function Home() {

    const post = {
        id: 1,
        title: "Post Title",
        author: {
            id: 1,
            name: "Sameer",
            username: "sameer",
            image: ""
        },
        content: <><p>Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river</p>
            <div>
                <img src="/images/kedarnath1.jpg"/>
            </div></>
    }

    return (
        <Layout>
            <Header />

            <Container fluid className="pt-3">
                <Row>
                    <Col xs={7}>
                        <Card className="w-100 border-0 rounded-4 shadow-bottom overflow-hidden">
                            <Card.Body className="p-0">
                                <div className="px-5">


                                    <Row>
                                        <Col xs={3}>
                                            <div className="profile-image">
                                                <img src="/images/dummy.png" className="img-responsive" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="d-flex align-items-center">
                                            <div className="d-flex flex-column justify-content-start profile-info">
                                                <h5 className="profile-name mb-1">Sameer Tomar</h5>
                                                <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                                            </div>
                                        </Col>
                                        <Col xs={2} className="d-flex align-items-center justify-content-center">
                                            <Link className="border border-1 p-2 rounded-5 line-height-1 text-body bg-body-secondary">
                                                <MdMoreVert className="fs-4" />
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} className="d-flex align-items-center justify-content-center h5 text-muted wtu border-2 border-bottom">
                                            <Card.Text>
                                                Are you want to upload something?
                                            </Card.Text>
                                        </Col>
                                    </Row>

                                    <Row className="py-4">
                                        <Col xs={6} className="pb-2 d-flex align-items-center gap-3">
                                            <Link className="d-flex text-muted text-decoration-none gap-2 btn btn-gray rounded-5"><FaImages className="fs-4" /><span>IMAGES</span></Link>
                                            <Link className="d-flex text-muted text-decoration-none gap-2 btn btn-gray rounded-5"><span>GIF</span></Link>
                                            <Link className="d-flex text-muted text-decoration-none gap-2 btn btn-gray rounded-4"><FaRegSmile className="fs-4" /></Link>
                                        </Col>

                                        <Col xs={6} className="align-items-end ">
                                            <Link className="btn btn-accent rounded-5 mx-4"> Add Post</Link>
                                            <Link className="btn btn-gray rounded-5"> Add Temple</Link>
                                        </Col>
                                    </Row>


                                </div>
                            </Card.Body>
                        </Card>
                        <Row className="py-4">
                            <Col xs={12} className="d-flex justify-content-right">
                                <h3>Top 10 Temples List</h3>


                            </Col>
                            <Col xs={12}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Mousewheel]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/temp2.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">1-Badrinath</h5>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/temp3.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">2-Rameshwaram</h5>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/jagannath3.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">3-Jagannath</h5>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/dwarkadhish.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">4-Dwarkadhish</h5>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/sri virupaksha.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">5-Sri Virupaksha</h5>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/temp2.jpg" className="img-responsive icon" />
                                            <h6 className="mt-3 text-center">6-Brahmaji Temple</h6>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/kedarnath1.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">7-Kedarnath</h5>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/kashi.jpg" className="img-responsive icon" />
                                            <h6 className="mt-3 text-center">8-Kashi vishwanath</h6>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/lingaraja.jpg" className="img-responsive icon" />
                                            <h5 className="mt-3 text-center">9-Lingaraja</h5>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <img src="/images/amarnath.jpg" className="img-responsive icon" />
                                            <h6 className="mt-3 text-center">10-Amarnath Temple</h6>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </Col>
                        </Row>

                        <Row>

                            <Col xs={12}>


                                <PostCard post={post} />

                            </Col>
                        </Row>
                    </Col>






                <Col xs={5} className=" h-mx-360 p-3 Box">
                    <Row>
                        <Col xs={12}>
                        <h3>Whats happening ?</h3>
                        </Col>
                    </Row>

                     <Row>
                        <Col xs={7}><h5 className="mb-0 mt-2">Ganesh Puja and aarti</h5>
                        <p className="mb-0">sanatanLok</p>
                        <h6 className="live-circle">Live Arti </h6>
                        </Col>

                        <Col xs={5} >
                            <img src="/images/kedarnath1.jpg" className="w-75 mx-4 kedarnath "/>
                        </Col>
                     </Row>

                     <Row>
                        <Col xs={7}>
                           <h5 className="mt-2 mb-0"> Sanatan Sanstha</h5>
                           <p className="mb-0">sanatanLok</p>
                        </Col>
                        <Col xs={5}>
                        <MdMoreHoriz className=" mt-2 fs-4 mx-5"></MdMoreHoriz>
                        </Col>
                     </Row>

                     <Row>
                        <Col xs={7}>
                           <h5 className="mt-3 mb-0"> Sanatan Dharma</h5>
                           <p className="mb-0">sanatanLok</p>
                        </Col>
                        <Col xs={5}>
                        <MdMoreHoriz className="mx-5 mt-3 fs-4"></MdMoreHoriz>
                        </Col>
                     </Row>

                     <Row>
                        <Col xs={7}>
                           <h5 className="mt-3 mb-0"> Saregama Bhakti</h5>
                           <p className="mb-0">sanatanLok</p>
                        </Col>
                        <Col xs={5}>
                        <MdMoreHoriz className="mx-5 mt-3 fs-4"></MdMoreHoriz>
                        </Col>
                     </Row>

                     <Row>
                        <Col xs={7}>
                            <p className="mt-3 mx-5"> Show More</p>
                        </Col>
                     </Row>

                     <Row>
                     <Col xs={3}>
                        <div className="profile-image mt-4">
                            <img src="/images/dummy.png" className="img-responsive" />
                            </div>
                    </Col>
                       <Col xs={7} className="d-flex align-items-center">
                         <div className="d-flex flex-column justify-content-start profile-info">
                            <h5 className="profile-name mb-1 mt-4">Sameer Tomar</h5>
                            <p className="fw-600 m-0 p-0 profile-username text-start text-muted">@sameer</p>
                         </div>
                       </Col>
                       <Col xs={2} className="d-flex align-items-center justify-content-center">
                       <Link className="btn btn-white rounded-5 mt-3 switch">Switch</Link>
                        </Col>
                     </Row>

                     <Row>
                        <Col xs={9}>
                            <h5 className="mt-4">Suggested For You</h5>
                        </Col>

                        <Col xs={3}>
                            <h5 className="mt-4">See All</h5>
                        </Col>
                     </Row>

                     <Row>
                     <Col xs={3}>
                        <div className="profile-image mt-4">
                            <img src="/images/dummy.png" className="img-responsive" />
                            </div>
                    </Col>
                       <Col xs={7} className="d-flex align-items-center">
                         <div className="d-flex flex-column justify-content-start profile-info">
                            <h5 className="profile-name mb-1 mt-4">pankajsharma_61</h5>
                            <p className="fw-600 m-0 p-0 profile-username text-start text-muted">Follow you</p>
                         </div>
                       </Col>
                       <Col xs={2} className="d-flex align-items-center justify-content-center">
                       <Link className="btn btn-white rounded-5 mt-3 switch">Follow</Link>
                        </Col>
                     </Row>

                     <Row>
                     <Col xs={3}>
                        <div className="profile-image mt-4">
                            <img src="/images/dummy.png" className="img-responsive" />
                            </div>
                    </Col>
                       <Col xs={7} className="d-flex align-items-center">
                         <div className="d-flex flex-column justify-content-start profile-info">
                            <h5 className="profile-name mb-1 mt-4">itsme_sameer</h5>
                            <p className="fw-600 m-0 p-0 profile-username text-start text-muted">Follow you</p>
                         </div>
                       </Col>
                       <Col xs={2} className="d-flex align-items-center justify-content-center">
                       <Link className="btn btn-white rounded-5 mt-3 switch">Follow</Link>
                        </Col>
                     </Row>

                     <Row>
                     <Col xs={3}>
                        <div className="profile-image mt-4">
                            <img src="/images/dummy.png" className="img-responsive" />
                            </div>
                    </Col>
                       <Col xs={7} className="d-flex align-items-center">
                         <div className="d-flex flex-column justify-content-start profile-info">
                            <h5 className="profile-name mb-1 mt-4">Sameer Tomar</h5>
                            <p className="fw-600 m-0 p-0 profile-username text-start text-muted">Follow you</p>
                         </div>
                       </Col>
                       <Col xs={2} className="d-flex align-items-center justify-content-center">
                       <Link className="btn btn-white rounded-5 mt-3 switch">Follow</Link>
                        </Col>
                     </Row>





                </Col>






                </Row>


            </Container>
        </Layout>
    )
}
