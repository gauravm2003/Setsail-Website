// import React from 'react'
// import styled from "styled-components";

// function About() {

//     const HeroSection = styled.section`
//   background: url('https://example.com/your-hero-image.jpg') no-repeat center center/cover;
//   height: 60vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: white;
// `;

//     const ContentWrapper = styled.div`
//   padding: 4rem;
//   background-color: #f5f5f5;
// `;

//     const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   color: #333;
//   text-align: center;
//   margin-bottom: 1.5rem;
// `;

//     const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.8;
//   text-align: center;
//   color: #555;
//   max-width: 800px;
//   margin: 0 auto;
// `;

//     const AboutSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color: #fff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
// `;

//     const DeveloperIntro = styled.div`
//   text-align: center;
//   margin-top: 2rem;
//   max-width: 900px;
// `;

//     const DeveloperTitle = styled.h3`
//   font-size: 1.8rem;
//   color: #333;
// `;

//     const ProjectDetails = styled.p`
//   font-size: 1.1rem;
//   color: #777;
//   line-height: 1.6;
// `;

//     const CallToAction = styled.div`
//   text-align: center;
//   background-color: #333;
//   color: white;
//   padding: 2rem;
// `;

//     const Button = styled.a`
//   padding: 10px 20px;
//   background-color: #ff7b00;
//   color: white;
//   border-radius: 5px;
//   text-decoration: none;
//   font-weight: bold;
//   &:hover {
//     background-color: #ff5100;
//   }
// `;

//     return (
//         <>
//             <div>
//                 {/* Hero Section */}
//                 <HeroSection>
//                     <div>
//                         <h1>Your Journey Begins Here</h1>
//                         <p>Discover new places and book unforgettable experiences.</p>
//                     </div>
//                 </HeroSection>

//                 {/* Content Section */}
//                 <ContentWrapper>
//                     <SectionTitle>About This Project</SectionTitle>
//                     <Description>
//                         This website is a travel and tourism platform created using MERN
//                         Stack to provide users with the ability to plan and book their dream
//                         vacations. The AI-powered itinerary generator makes planning easier
//                         than ever. From exploring destinations to booking your trips and
//                         saving itineraries, we've got you covered.
//                     </Description>
//                 </ContentWrapper>

//                 {/* Developer Intro */}
//                 <AboutSection>
//                     <DeveloperIntro>
//                         <DeveloperTitle>About The Developer</DeveloperTitle>
//                         <ProjectDetails>
//                             Hello, I am [Your Name], a third-year student passionate about
//                             building innovative solutions using the latest web technologies. I
//                             built this travel and tourism platform during my internship to
//                             showcase my skills in MERN stack development and AI integration.
//                             It’s been a journey of growth and learning, and I hope it provides
//                             value to every user who loves to travel.
//                         </ProjectDetails>
//                     </DeveloperIntro>
//                 </AboutSection>

//             </div>
//         </>
//     )
// }

// export default About

import React from 'react'
import BG_Img from '../assets/BGImg.jpg'

function About() {
    return (
        <div>

            <section
                className="text-white text-center position-relative"
                style={{
                    backgroundImage: `url(${BG_Img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "85vh",
                }}
            >
                <div
                    className="container-fluid position-absolute my-5 top-50 start-50 translate-middle"
                >
                    <span
                        style={{
                            fontFamily: "'Satisfy', cursive",
                            fontSize: "48px",
                            lineHeight: "50px",
                        }}
                    >
                        Designed For Fun
                    </span>
                    <h1
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "100px",
                            flexWrap: "wrap",
                            lineHeight: "126px",
                            letterSpacing: "-5px",
                        }}
                    >
                        <b>One Developer. One Project.</b>
                    </h1>
                    <p style={{ fontSize: "20px", paddingTop: "15px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem
                        temporibus nam molestiae deleniti inventore et quibusdam corporis
                    </p>
                </div>
            </section>

        </div>
    )
}

export default About
