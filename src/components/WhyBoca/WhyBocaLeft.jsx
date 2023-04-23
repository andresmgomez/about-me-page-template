import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./WhyBocaLeft.css";

export default function WhyBocaLeft() {
	return (
		<section class="why-boca">
			<Container>
				<Row>
					<Col sm={12} md={{ span: 5, offset: 1 }}>
						<div className="sub-heading">
							<h3>
								Why did I choose Boca <strong>Code</strong>
							</h3>
							<p>
								After researching different coding bootcamps inside South Florida,
								I decided to join Boca Code because they teach you the skills you
								need to succeed in the job market right now, as a Software
								Engineer or any other developer job.
							</p>
							<p>
								It has always been a dream to start working in one of the local
								start-ups here in Boca Raton. I'm a step closer to achieve that
								goal, by learning how to build websites and applications, and how
								Front-end and Back-end development are bundled together.
							</p>
						</div>
					</Col>
					<Col sm={12} md={{ span: 5, offset: 1 }}>
						<iframe
							width="100%"
							height="362"
							src="https://www.youtube.com/embed/rOHwlTSZfhw"
							title="Learn to Code at Boca Code"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
