import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Navbar.css";

function Navbar() {
	return (
		<section className="navbar-area">
			<Container fluid>
				<Row className="d-flex align-content-center justify-content-between">
					<Col md={2}>
						<div className="navbar-logo">
							<a href="#home" alt="My Portfolio logo">
								<h3>
									My <strong>Portfolio</strong>
								</h3>
							</a>
						</div>
					</Col>
					<Col md={7}>
						<div className="d-flex align-items-center justify-content-end">
							<nav className="navbar-menu d-none d-lg-block">
								<ul>
									<li>
										<a href="#home">Home</a>
									</li>
									<li>
										<a href="#about">Who Am I</a>
										<ul className="sub-menu">
											<li>
												<a href="#about-me">About Me</a>
											</li>
											<li>
												<a href="#bootcamp">Bootcamp</a>
											</li>
											<li>
												<a href="#work">Where I Work</a>
											</li>
											<li>
												<a href="#last-project">Last Project</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#skills">Tech Skills</a>
									</li>
									<li>
										<a href="#projects">Projects</a>
									</li>
								</ul>
							</nav>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Navbar;
