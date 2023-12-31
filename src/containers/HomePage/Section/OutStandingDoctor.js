import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-out-standing-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-out-standing-doctor' />
                                        </div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến Sĩ Tuấn Kiệt</div>
                                        <div>Xương khớp 6</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
