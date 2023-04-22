import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import culture from "../../../assets/icons/culture.png";
import mentor from "../../../assets/icons/mentor.png";
import agile from "../../../assets/icons/agile-learn.png";

import "./Workplace1.css";

export default function Workplace1() {
	return (
		<section className="cards-workplace">
			<Container>
				<Row>
					<Col md={12}>
						<div className="section-title">
							<h2>Ideal Workplace</h2>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={4}>
						<div className="workplace-topic">
							<div className="workplace-icon">
								<img className="img-fluid" src={culture} alt="Company culture" />
							</div>
							<div className="workplace-quality">
								<h5>
									<a href="#">Company Culture</a>
								</h5>
								<p>
									I value a company where I can freely share my ideas. Receive
									constructive criticism, so I can learn how to improve and
									collaborate with my development team.
								</p>
							</div>
						</div>
					</Col>
					<Col sm={12} md={4}>
						<div className="workplace-topic">
							<div className="workplace-icon">
								<img
									className="zoom-icon img-fluid"
									src={mentor}
									alt="Company culture"
								/>
							</div>
							<div className="workplace-quality">
								<h5>
									<a href="#">Mentorship</a>
								</h5>
								<p>
									I would like to start in a company where I can learn how to
									become a better developer, by working with senior enginers that
									peer review my coding skills.
								</p>
							</div>
						</div>
					</Col>
					<Col sm={12} md={4}>
						<div className="workplace-topic">
							<div className="workplace-icon">
								<img className="img-fluid" src={agile} alt="Company culture" />
							</div>
							<div className="workplace-quality">
								<h5>
									<a href="#">Agile Environment</a>
								</h5>
								<p>
									I have learned how to work in a project, where I can learn
									different parts of the stack, such as Frontend and Backend
									development using the best practices.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
