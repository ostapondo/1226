import React from 'react';
import Img1 from '../assets/img/451840904_832301169082963_8557644685182680819_n.jpg';
import Img2 from '../assets/img/450843678_829712026008544_6508506674572251664_n.jpg';
import Img3 from '../assets/img/451483135_831274585852288_7295268687137389440_n.jpg';

const Slider = () => (
    <div className="container-fluid p-0">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Img1} className="d-block w-100 carousel-img" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={Img2} className="d-block w-100 carousel-img" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={Img3} className="d-block w-100 carousel-img" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
)

export default Slider;