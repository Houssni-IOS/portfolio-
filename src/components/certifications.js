import React from "react";
import { Card } from "react-bootstrap";

function Certification() {
    const certifications = [
        {
            certification: "DevOps, Cloud, and Agile Foundations Specialization",
            organisation: "IBM Skills Network",
        },
        {
            certification: "Python Functions, Files, and Dictionaries | Data Collection and Processing with Python",
            organisation: "University of Michigan",
        },
        {
            certification: "Full-Stack Web Development with React",
            organisation: "The Hong Kong University of Science and Technology",
        },
    ];

    return (
        <section className="section">
            {certifications.map((certification) => (
                <Card key={certification.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{certification.certification}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {certification.organisation}
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Certification;
