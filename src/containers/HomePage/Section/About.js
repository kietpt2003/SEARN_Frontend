import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về Tuấn Kiệt
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/147SkAVXEqM?si=o7OspVooFGWqrZiX"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Trong video này, chúng ta sẽ hoàn tất việc design giao diện theo trang bookingcare.vn. Chúng ta sẽ hoàn thiện những phần đang còn dang dở, để từ video tiếp theo, chúng ta sẽ bắt đầu làm về backend và react để tạo dữ liệu thật cho trang home design này.</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
