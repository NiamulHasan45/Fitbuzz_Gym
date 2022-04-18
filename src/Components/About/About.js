import React from 'react';
import './About.css';
import niamul from '../images/niamul.png'

const About = () => {
    return (
        <div className='bg-dark text-white mt-5 p-5 d-flex align-items-center justify-content-center'>
            <div className='w-50'>
                <h1>About Me</h1>
                <p>
                    Hello, I am Niamul Hasan.A couple of reasons motivated me to build my career in web development.
                    </p>
                    <p> Firstly, My interest which is grown during my Bachelor degree. The undergraduate curriculum in Information and Communication Engineering (ICE) introduces me to a wide variety of technological field. So i explored a lot of thing and i came up to a conclusion that it is the best suited career for me. 
                        </p>
                        <p>Secondly, Web development is very fun to do. It is the perfect place to expose all my skills, creativity with the most efficient way through my work.</p>
                        <p>I want to be a top level web developer within two years.</p>

              
                 
            </div>
            <div className='w-50 d-flex align-items-center justify-content-center'>
                <img src={niamul} alt="" />
            </div>
        </div>
    );
};

export default About;