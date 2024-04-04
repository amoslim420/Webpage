import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amos Limbu </span>
            from <span className="purple">Dharan,Nepal</span>
            <br /> I am a forth Year student pursuing a career in Computer Science from Tribhuvan University.
            <br />
            Additionally, I am enthusiastic about Animation and Graphics.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
               Basketball
            </li>
            <li className="about-activity">
               Music
            </li>
            <li className="about-activity">
               Movies
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
