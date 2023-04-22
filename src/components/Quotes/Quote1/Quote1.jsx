import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import author from "../../../assets/author.png";
import "./Quote1.css";

export default function Quote1() {
	return (
		<section className="quote-right">
			<Container>
				<Row className="align-items-center">
					<Col sm={12} md={5}>
						<div className="author">
							<img src={author} alt="Seneca" />
						</div>
					</Col>
					<Col sm={12} md={7}>
						<h3>
							<q>Luck is what happens when preparation meets opportunity</q>
						</h3>
						<h4>
							<strong>
								Seneca - <em>Roman Philosopher</em>
							</strong>
						</h4>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
