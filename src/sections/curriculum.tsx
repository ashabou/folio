// CurriculumSection.tsx
import { useState, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
/*
 * You should install the following packages if you haven't already:
 * 
 * npm install react-multi-carousel
 * 
 * If you use TypeScript, also install types:
 * 
 * npm install --save-dev @types/react-multi-carousel
 * 
 * The 'WithStyles' component used below is not defined in your code.
 * You should either define it or replace it with your own component.
 */

interface Semester {
  id: number;
  title: string;
  courses: string[];
  description?: string;
  highlights?: string[];
}

export const CurriculumSection = () => {
  // Semester data defined inside the component
  const semesters: Semester[] = [
    {
      id: 1,
      title: "Semester 1",
      courses: [
        "Introduction to Computer Science",
        "Mathematics for CS",
        "Programming Fundamentals",
        "Digital Logic Design"
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      courses: [
        "Data Structures",
        "Discrete Mathematics",
        "Computer Organization",
        "Object-Oriented Programming"
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      courses: [
        "Algorithms",
        "Database Systems",
        "Operating Systems",
        "Computer Networks"
      ],
    },
    // Add more semesters as needed
  ];



  return (
    <div className="responsive-container-card">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left text-blue-400">Curriculum</h1>
      <div className="curriculum-box">
      <Carousel
        additionalTransfrom={250}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="studium_card">
            <h1 className='card-title'>1. Semester</h1>
            <h3 className='semester-list'>Diskrete Strukturen</h3>
            <h3 className='semester-list'>
              Einführung in die Informatik & Grundlagenpraktikum: Programmierung
            </h3>
            <h3 className='semester-list'>Einführung in die Rechnerarchitektur</h3>
            <h3 className='semester-list'>
              Deutsch im Bachelorstudium C1 - Informatik: Wissenschaftliche
              Texte verstehen und schreiben
            </h3>
        </div>
        <div className="studium_card">
            <h2 className='card-title'>2.Semester</h2>
            <h3 className='semester-list'>Einführung in die Softwaretechnik</h3>
            <h3 className='semester-list'>Grundlagen: Algorithmen und Datenstrukturen</h3>
            <h3 className='semester-list'>Funktionale Programmierung und Verifikation</h3>
            <h3 className='semester-list'>Lineare Algebra für Informatik</h3>
        </div>
        <div className="studium_card">
            <h2 className='card-title'>3.Semester</h2>
            <h3 className='semester-list'>Grundlagen: Datenbanken</h3>
            <h3 className='semester-list'>IT-Sicherheit</h3>
            <h3 className='semester-list'>Grundlagenpraktikum: Rechnerarchitektur</h3>
            <h3 className='semester-list'>Analysis für Informatik</h3>
        </div>
        <div className="studium_card">
            <h2 className='card-title'>4.Semester</h2>
            <h3 className='semester-list'>Grundlagen: Rechnernetze und Verteilte Systeme</h3>
            <h3 className='semester-list'>Einführung in die Theoretische Informatik</h3>
            <h3 className='semester-list'>Diskrete Wahrscheinlichkeitstheorie</h3>
            <h3 className='semester-list'>
              Seminar: Causal Reasoning
            </h3>
        </div>
        <div className="studium_card">
            <h2 className='card-title'>5.Semester</h2>
            <h3 className='semester-list'>Grundlagenpraktikum: Rechnerarchitektur</h3>
            <h3 className='semester-list'>
              Bachelor-Praktikum - Motion Planning
            </h3>
            <h3 className='semester-list'>Grundlagen: Betriebssysteme und Systemsoftware</h3>
            <h3 className='semester-list'>Netzsicherheit</h3> 
        </div>
        <div className="studium_card">
            <h2 className='card-title'>6.Semester</h2>
            <h3 className='semester-list'>Grundlagenpraktikum: Rechnerarchitektur</h3>
            <h3 className='semester-list'>Numerisches Programmieren</h3>
            <h3 className='semester-list'>Concepts of C++ programming</h3>
            <h3 className='semester-list'>ECO2</h3>
        </div>
        <div className="studium_card">
            <h2 className='card-title'>7.Semester</h2>
            <h3 className='semester-list'>
                          Jazz Course
            </h3>
            <h3 className='semester-list'>BWL1</h3>
            <h3 className='semester-list'>BWL2</h3>
            <h3 className='semester-list'>ECO1</h3>
            <h3 className='semester-list'>Business Analytics & Machine Learning</h3>
        </div>
      </Carousel>
      </div>
        
      </div> 
  );
};
export default CurriculumSection;