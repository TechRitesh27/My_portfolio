import React from 'react';
import './Education.css';

const Education = () => {
  const allEducation = [
    {
      Degree: 'BE - Computer Engineering',
      clgName: "Pravara Rural's Engineering College, Loni, A.Nagar",
      marks: 'CGPA: 8.51',
      year: '2022 - 2026',
    },
    {
      Degree: 'Higher Secondary Education (HSC)',
      clgName: 'New English School & Junior College, Baragaon Pimpri, Sinnar',
      marks: 'Marks: 73.50%',
      year: '2021 - 2022',
    },
    {
      Degree: 'Secondary Education (SSC)',
      clgName: 'New English School & Junior College, Baragaon Pimpri, Sinnar',
      marks: 'Marks: 88.60%',
      year: '2019 - 2020',
    },
  ];

  return (
    <section className="education-section">
      <h1 className="education-heading">EDUCATION</h1>
      <div className="education-cards">
        {allEducation.map((item, index) => (
          <div className="edu-card" key={index}>
            <h2>{item.Degree}</h2>
            <h3>{item.clgName}</h3>
            <p>{item.marks}</p>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
