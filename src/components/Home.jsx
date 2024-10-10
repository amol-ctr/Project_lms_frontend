import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Slider from 'react-slick';
import './Home.css';

// Function for the Slider in the Benefits section
// function SimpleSlider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div className="slider-container">
//             <Slider {...settings} className=' flex'>
//                 <div className="benefit-item ml-16">
//                     <img src="https://cdn-icons-png.flaticon.com/512/5828/5828162.png" alt="Confidence Icon" />
//                     <h3>Boost Confidence</h3>
//                     <p>Gain confidence by simulating the exam environment.</p>
//                 </div>
//                 <div className="benefit-item ml-16">
//                     <img src="/icons/analysis.svg" alt="Analysis Icon" />
//                     <h3>Identify Weaknesses</h3>
//                     <p>Focus on the areas that need improvement.</p>
//                 </div>
//                 <div className="benefit-item ml-16">
//                     <img src="/icons/time.svg" alt="Time Management Icon" />
//                     <h3>Time Management</h3>
//                     <p>Practice efficient time management in real exam conditions.</p>
//                 </div>
//                 <div className="benefit-item ml-16">
//                     <img src="/icons/progress.svg" alt="Progress Icon" />
//                     <h3>Track Progress</h3>
//                     <p>Monitor your progress with detailed reports and analytics.</p>
//                 </div>
//             </Slider>
//         </div>
//     );
// }


const Home = () => {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const totalCards = 3;
    
    useEffect(() => {
        const cardInterval = setInterval(() => {
          setCurrentCardIndex(prevIndex => (prevIndex + 1) % totalCards);
        }, 3000);
    
        return () => clearInterval(cardInterval);
    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Master Your Exams with Comprehensive Mock Test</h1>
                        <p>
                            Our expertly crafted mock test help you improve your preparation, track progress, and succeed.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                            <Link to="/login" className="btn btn-secondary">Login</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Benefits Section with Slider */}
            <h2 className="section-title text-center">Benefits of Taking Mock Tests</h2>

            {/* <SimpleSlider/> */}
            <section className="benefits-section flex ml-2">
                <div className="benefit-item ml-16">
                    <img src="https://cdn-icons-png.flaticon.com/512/5828/5828162.png" alt="Confidence Icon" className=' ml-20 pl-4 h-16' />
                    <h3>Boost Confidence</h3>
                    <p>Gain confidence by simulating the exam environment.</p>
                </div>
                <div className="benefit-item ml-16">
                    <img src="./../../img/analytics icon.png" alt="Analysis Icon" className=' ml-20' />
                    <h3>Identify Weaknesses</h3>
                    <p>Focus on the areas that need improvement.</p>
                </div>
                <div className="benefit-item ml-16">
                    <img src="./../../img/time.png" alt="Time Management Icon" className=' ml-20'/>
                    <h3>Time Management</h3>
                    <p>Practice efficient time management in real exam conditions.</p>
                </div>
                <div className="benefit-item ml-16">
                    <img src="./../../img/track.webp" alt="Progress Icon" className=' ml-20'/>
                    <h3>Track Progress</h3>
                    <p>Monitor your progress with detailed reports and analytics.</p>
                </div>
            </section>

            {/* Featured Mock Tests Section */}
            <section className="featured-tests-section">
                <h2 className="section-title text-center">Featured Mock Tests</h2>
                <div className="featured-tests">


                {/* <div className="flashcards-wrapper" style={{ transform: `translateX(-${currentCardIndex * 10}%)`  }}> */}
                <div className="flashcards-wrapper" id="cards" style={{ transform: `translateX(-${currentCardIndex * 10}%)`  }}>

                    <div className="test-card">
                        <img src="./../../img/maths.jpg" alt="Math Test" className="test-image" />
                        <div className="test-content">
                            <h3>MATHEMATICS</h3>
                            <p>Previous year questions covering Algebra, Geometry, and more.</p>
                            <Link to="/math_pyqs" className="btn btn-outline">Maths PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../img/physics.jpg" alt="Physics Test" className="test-image" />
                        <div className="test-content">
                            <h3>PHYSICS</h3>
                            <p>Improve your score in every topic of Physics through these previous year questions</p>
                            <Link to="/physics_pyqs" className="btn btn-outline">Physics PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../img/chemistry_icon.jpg" alt="Chemistry Test" className="test-image" />
                        <div className="test-content">
                            <h3>CHEMISTRY</h3>
                            <p>Contains previous year questions on physical, organic as well as inorganic chemistry</p>
                            <Link to="/chemistry_pyqs" className="btn btn-outline">Chemistry PYQs</Link>
                        </div>
                    </div>
                   {/* </div>  */}
                   </div>
                </div>

            </section>

            
        </div>
    );
};

export default Home;
