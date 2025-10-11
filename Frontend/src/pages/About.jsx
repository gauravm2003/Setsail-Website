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
