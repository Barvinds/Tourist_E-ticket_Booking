import React, { useState, useEffect } from "react";
import './style.css';
import Chatbox from './Chatbox';
import Medicines from '../components/Placess.jsx';

const Home = () => {
    const images = [
      "https://via.placeholder.com/600x400?text=Slide+1",
      "https://via.placeholder.com/600x400?text=Slide+2",
      "https://via.placeholder.com/600x400?text=Slide+3",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentIndex]);

    return (
        <section id="home" className="container section section__height">
            <div style={sliderStyles}>
                <h1 style={headingStyles}>PLACES WILL EXPLORE THE HISTORY</h1>
                <div style={sliderContainerStyles}>
                    <div style={imageContainerStyles}>
                        <img
                            src={images[currentIndex]}
                            alt={`slide-${currentIndex}`}
                            style={imageStyles}
                        />
                    </div>
                    <div style={dotsContainerStyles}>
                        {images.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => goToSlide(index)}
                                style={{
                                    ...dotStyles,
                                    backgroundColor: currentIndex === index ? "#333" : "#bbb",
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>


     
            <Medicines/>




            <div style={chatboxContainerStyles}>
                <Chatbox />
            </div>
        </section>
    );
};

const sliderStyles = {
    textAlign: "center",
    marginBottom: "20px",
};

const headingStyles = {
    marginBottom: "10px",
};

const sliderContainerStyles = {
    position: "relative",
    width: "60%",
    margin: "0 auto",
};

const imageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
};

const imageStyles = {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
};

const dotStyles = {
    height: "10px",
    width: "10px",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.3s ease",
};

const chatboxContainerStyles = {
    marginTop: "20px",
};

export default Home;
