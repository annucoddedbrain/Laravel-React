import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";


export default function Layout({children, className}){
    return (
        <Container fluid={true} className="p-0 h-100v bg-body mobile-menu">
            <Sidebar />
            <main id="main" className={className}>
                {children}
            </main>

        </Container>
    )
}