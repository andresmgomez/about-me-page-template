import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import kiosk from "../../images/kiosk.png";
import "./ProjectDetail.css";

export default function Project1() {
	return (
		<section className="project-gallery">
			<Container>
				<Row className="justify-content-between align-items-center">
					<Col md={{ span: 5, offset: 1 }}>
						<div className="project-idea">
							<h5>Revolutionize self checkout stores</h5>
							<h2>Personalize meals to loyal customers using AI</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium, fugit totam. Consequatur itaque voluptate mollitia
								quidem qui ex, recusandae, quod delectus est officiis consectetur
								aspernatur harum laborum magni exercitationem debitis.
							</p>
							<h4>Next generation kiosks:</h4>
							<ul className="project-features">
								<li>Customers can pay through their phone.</li>
								<li>Self checkout systems that accept cryptos.</li>
								<li>Recommend balanced meals of restaurant.</li>
								<li>Keep track of customer's habits and routine.</li>
							</ul>
						</div>
					</Col>
					<Col md={5}>
						<div className="project-photo">
							<img src={kiosk} alt="Profile pic taken during a photoshoot" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
