import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2024 Phạm Tuấn Kiệt. <a target='_blank' href='https://www.facebook.com/tuankiet29012003/'>&#8594;More information&#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
