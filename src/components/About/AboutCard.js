import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyal Rahate </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently a third year computer science student.
            <br />
            I am completing my Btech from Rcoem Nagpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "!"{" "}
          </p>
          <footer className="blockquote-footer">Priyal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
