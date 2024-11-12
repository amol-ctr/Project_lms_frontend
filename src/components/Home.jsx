import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Slider from 'react-slick';
import './Home.css';
import Chatbot from './Chatbot';

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

            <Chatbot/>

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
                    <img src="./../../src/assets/img/analytics icon.png" alt="Analysis Icon" className=' ml-20' />
                    <h3>Identify Weaknesses</h3>
                    <p>Focus on the areas that need improvement.</p>
                </div>
                <div className="benefit-item ml-16">
                    <img src="./../../src/assets/img/time.png" alt="Time Management Icon" className=' ml-20'/>
                    <h3>Time Management</h3>
                    <p>Practice efficient time management in real exam conditions.</p>
                </div>
                <div className="benefit-item ml-16">
                    <img src="./../../src/assets/img/track.webp" alt="Progress Icon" className=' ml-20'/>
                    <h3>Track Progress</h3>
                    <p>Monitor your progress with detailed reports and analytics.</p>
                </div>
            </section>

            {/* Featured Mock Tests Section */}
            <section className="featured-tests-section">
                <h2 className="section-title text-center">Featured Previous Year Questions</h2>
                <div className="featured-tests">

                <div className="flashcards-wrapper" id="cards" style={{ transform: `translateX(-${currentCardIndex * 10}%)`  }}>

                    <div className="test-card">
                        <img src="./../../src/assets/img/maths.jpg" alt="Math Test" className="test-image" />
                        <div className="test-content">
                            <h3>MATHEMATICS</h3>
                            <p>Previous year questions covering Algebra, Geometry, and more.</p>
                            <Link to="/math_pyqs" className="btn bg-blue-500 btn-outline">Maths PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../src/assets/img/physics.jpg" alt="Physics Test" className="test-image" />
                        <div className="test-content">
                            <h3>PHYSICS</h3>
                            <p>Improve your score in every topic of Physics through these previous year questions</p>
                            <Link to="/physics_pyqs" className="btn bg-blue-500 btn-outline">Physics PYQs</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../src/assets/img/chemistry_icon.jpg" alt="Chemistry Test" className="test-image" />
                        <div className="test-content">
                            <h3>CHEMISTRY</h3>
                            <p>Contains previous year questions on physical, organic as well as inorganic chemistry</p>
                            <Link to="/chemistry_pyqs" className="btn bg-blue-500 btn-outline">Chemistry PYQs</Link>
                        </div>
                    </div>
                   {/* </div>  */}
                   </div>
                </div>

            </section>

            {/*Some recommended books*/}
            <section className="recommended-books-section">
                <h2 className="section-title text-center">Some recommended books</h2>
                <div className="featured-tests">

                <div className="flashcards-wrapper" id="cards2" style={{ transform: `translateX(-${currentCardIndex * 10}%)`  }}>

                    <div className="test-card">
                        <img src="./../../src/assets/img/g_tewani.webp" alt="Math Test" className="test-image" />
                        <div className="test-content">
                            <h3>G Tewani:JEE Mains Mathematics</h3>
                            <h3 className=' bg-red-300'>Only for ₹2,499</h3>
                            <Link to={`/payment/${1}`} className="btn bg-blue-500 btn-outline">Click to buy</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../src/assets/img/hc_verma.webp" alt="Physics Test" className="test-image" />
                        <div className="test-content">
                            <h3>H.C. Verma:JEE Mains Physics</h3>
                            <h3 className=' bg-red-300'>Only for ₹1,354</h3>
                            <Link to={`/payment/${2}`} className="btn bg-blue-500 btn-outline">Click to buy</Link>
                        </div>
                    </div>
                    <div className="test-card">
                        <img src="./../../src/assets/img/op_tandon.webp" alt="Chemistry Test" className="test-image" />
                        <div className="test-content">
                            <h3>O.P. Tandon:JEE Mains Chemistry</h3>
                            <h3 className=' bg-red-300'>Only for ₹1,499</h3>
                            <Link to={`/payment/${3}`} className="btn bg-blue-500 btn-outline">Click to buy</Link>
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
