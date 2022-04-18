import React from 'react';
import { Carousel } from 'react-bootstrap';
import s1 from '../images/slide-1-01.png';
import s2 from '../images/slide-2-01.png';
import s3 from '../images/slide-3-01.png';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
      <div className='full-home bg-dark'>
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={s1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Keep your body fit and strong with personal supervision</h3>
                    <p>Health is the ultimate power of your strenth. So make it as strong as iron.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={s2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Unique meal can give you extra boost.</h3>
                    <p>Food is the fuel of out body, so we offer individual food menue with your body type.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={s3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Feel the freshness of your mind.</h3>
                    <p>Mind training can give you the power of positive thinking, so try to make good use of it.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Services></Services>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;