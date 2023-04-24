import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Diplôme d'Ingénieur d'État en Informatique et Réseaux - Option MIAGE",
            etablissement: "EMSI (École Marocaine des Sciences de l'Ingénieur) - Marrakech",
            annees: "2021 - en cours",
        },
        {
            diplome: " DIPLÔME UNIVERSITAIRE DE TECHNOLOGIE  - Génie Informatique",
            etablissement: "l’Ecole Supérieure de Technologie de Safi (ESTS)",
            annees: "2019 - 2021",
        },
        {
            diplome: "Baccalauréat - Sciences physique internationnal",
            etablissement: " lycée les Champions - Safi ",
            annees: "2019",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
