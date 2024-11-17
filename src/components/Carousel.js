import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const carouselImages = [
        {
            img: 'images/simg1.jpg',
            heading: 'Welcome to beauty spot',
            subheading: 'Sample  theme for Beauty Salons, Hairdressers, Wellness or Spa',
        },
        {
            img: 'images/simg2.jpg',
            heading: 'Read Professional Beauty Tips',
            subheading: 'Get inspired by our beauty tips on cosmetics, hair and body treatments',
        },
        {
            img: 'images/simg3.jpg',
            heading: 'Hundreds of Happy Clients',
            subheading: 'Read what some of our customers are saying about our beauty salon',
        },
    ];

    const changeImage = (direction) => {
        if (direction === 'next') {
            setCurrentImage((prev) => (prev + 1) % carouselImages.length)
        } else {
            setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
        }
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            changeImage('next');
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className='carousel-container'>
            <div className="slideshow-container" id="carousel-1">
                {carouselImages.map((slide, index) => (
                    <div 
                    className={`mySlides fade ${index === currentImage ? 'active': ''}`}
                    style={{ display: index === currentImage ? 'block' : 'none' }}
                    >
                        <div className="numbertext">{index + 1} / {carouselImages.length}</div>
                        <img src={slide.img} alt="" style={{ width: "100%" }} />
                        <div className="text">
                            <h2>{slide.heading}</h2>
                            <h4>{slide.subheading}</h4>
                        </div>
                    </div>
                ))}

                <a className="prev" onClick={()=> changeImage('prev')}>&#10094;</a>
                <a className="next" onClick={()=> changeImage('next')}>&#10095;</a>

            </div>
        </div>
    )
}

export default Carousel