import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Section/Specialty.scss';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='section-specialty'>
                <Slider {...settings}>
                    <div className='img-customize'>
                        <h3>1</h3>
                    </div>
                    <div className='img-customize'>
                        <h3>2</h3>
                    </div>
                    <div className='img-customize'>
                        <h3>3</h3>
                    </div>
                    <div className='img-customize'>
                        <h3>4</h3>
                    </div>
                    <div className='img-customize'>
                        <h3>5</h3>
                    </div>
                    <div className='img-customize'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
