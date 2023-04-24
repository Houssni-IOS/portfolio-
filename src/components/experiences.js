import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title , location, duration, sujet, technologie }) => {
    return (
        <Card title={title} subTitle={location} className="md:w-25rem">
            <div>
                <div><b>Durée : </b> {duration}</div>
                <div><b>Sujet : </b>{sujet}</div>
                <div><b>Téchnologie : </b>{technologie}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage d\'été de fin d\'année 2022',
            duration: '15 juillet 2022 - 15 aout 2022',
            location: 'OCP Safi',
            technologie: 'Php , Bootstrap , Mysql.',
            sujet: ' Développement et conception d\'une application web de la gestion des préts d\'EPI .',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    duration={experience.duration}
                    location={experience.location}
                    sujet={experience.sujet}
                    technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
