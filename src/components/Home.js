import React from 'react';
import './Home.css'; 
import header1 from '../assets/header-1.jpg';
import header2 from '../assets/header-2.jpg';


const Home = () => {
    return (
        <section className="container">
            <div className="content__container">
                <h1>
                    Best Learning<br />
                    <span className="heading__1">Education Platform</span><br />
                    <span className="heading__2">in The World</span>
                </h1>
                <p>
                    Unlock your full learning potential with our intuitive education platform.
                    Seamlessly blending technology and education, we provide an immersive learning environment.
                </p>
                <form>
                    <input type="text" placeholder="What do you want to learn" />
                    <button type="submit">Search Course</button>
                </form>
            </div>
            <div className="image__container">
                <img src={header1} alt="header 1" />
                <img src={header2} alt="header 2" />

                <div className="image__content">
                    <ul>
                        <li>Get 30% off on every 1st month</li>
                        <li>Expert teachers</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;
