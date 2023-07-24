import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

    useEffect(() => {
        AOS.init();
      }, []);
      

    return (
        <div className='my-24'>
            <div className="love-and-enjoy-features">
        <div className="love-enjoy-part">
            <div className="orange-line-header">
                <div className="orange-line"></div>
                <h2 className="feature-heading">
                    Study Monk you <br/>will love & enjoy
                </h2>
            </div>
            <p className="feature-details description">There are many variations of passages of Lorem Ipsum available, but the majority <br/> have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
            <div className="common-section">
                <div data-aos="fade-right" data-aos-duration="1000" className="common-div">
                    <h3 className="common-h3">Desktop & Mobile Version App</h3>
                    <div className="common-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="common-div">
                    <h3 className="common-h3">Learn from anywhere</h3>
                    <div className="common-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="common-div">
                    <h3 className="common-h3">Awesome Support System</h3>
                    <div className="common-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="common-div">
                    <h3 className="common-h3">Learning Environment</h3>
                    <div className="common-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised something...........</div>
                </div>
            </div>
        </div>
        <div className="image-and-button">
            <img data-aos="fade-left" data-aos-duration="1000" src="https://i.ibb.co/GVgxMWX/architect.png" alt=""/>
                <button data-aos="zoom-in" data-aos-duration="1000" className="img-button">10+ Year <span className="img-bt-span">Experience</span> 
                </button>                        
        </div>
        
    </div>
    
        </div>
    );
};

export default Features;