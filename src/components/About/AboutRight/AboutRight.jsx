import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import myPhoto from "../../../assets/my-photo1.jpg";

import "./AboutRight.css";

export default function AboutRight() {
	return (
		<>
			<section className="about-me">
				<Container>
					<Row className="d-flex justify-content-between align-items-center">
						<Col sm={12} md={{ span: 5, offset: 1 }}>
							<div className="photo">
								<img src={myPhoto} alt="Profile pic taken during a photoshoot" />
							</div>
						</Col>
						<Col lg={5}>
							<div className="description">
								<span>A little about me</span>
								<h2>I'm learning how to make Websites</h2>
								<p className="paragraph">
									I've been working as a light and sound technician for over 5
									years. From private events to weddings, I'm in charge of
									setting up the light scenes, and spread the sound throughout
									the room. Most of the time, I help to setup trusses, uplights,
									deejay consoles, speakers, subwoofers, and sometimes, LCDs
								</p>
								<p className="paragraph">
									After, I finish the course, I want to find a job as a Software
									Engineer and apply all the soft and tech skills I learned
									throughout the course.
								</p>
								<h5>Fun Fact: I like to eat 🍕 and drink 🍺 on the weekends</h5>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}
