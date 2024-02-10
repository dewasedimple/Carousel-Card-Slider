import React, { useRef } from 'react';
import Mycard from './Doctor.js';
import './Imagecarousel.css';

const Imagecarousel = () => {
    const boxRef = useRef(null);

    const btnpressprev = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
        }
    };

    const btnpressnext = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
        }
    };

    // Define an array of objects containing data for each card
    const cardsData = [
        {
            imageUrl: "/images/doctor1.jpg",
            title: "Dr. James Anderson",
            description: "Description for card 1. This is a sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor2.jpg",
            title: "Dr. Emily Johnson",
            description: "Description for card 2. This is another sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor2.jpg",
            title: "Dr. Emily Johnson",
            description: "Description for card 2. This is another sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor1.jpg",
            title: "Dr. James Anderson",
            description: "Description for card 1. This is a sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor2.jpg",
            title: "Dr. Emily Johnson",
            description: "Description for card 2. This is another sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor1.jpg",
            title: "Dr. James Anderson",
            description: "Description for card 1. This is a sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor2.jpg",
            title: "Dr. Emily Johnson",
            description: "Description for card 2. This is another sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        {
            imageUrl: "/images/doctor1.jpg",
            title: "Dr. James Anderson",
            description: "Description for card 1. This is a sample description that spans multiple lines to demonstrate the layout. It should be limited to 5-6 lines."
        },
        
    ];

    return (
        <> 
        <h3>SAMPLE CAROUSEL  CARD SLIDER</h3>
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&#9664;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&#9654;</p></button>

            <div className="product-container" ref={boxRef}>
                {/* Map over the cardsData array to render Mycard components */}
                {cardsData.map((card, index) => (
                    <Mycard 
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Imagecarousel;
