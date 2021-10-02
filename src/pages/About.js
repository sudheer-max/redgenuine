import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>

            <section className="about-us sec-padd-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">

                            <figure className="about-img">
                                <img src="images/resource/1.png" alt="about titan builders" />
                            </figure>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="about-text">
                                <h2>
                                    about our <span className="thm-color">Factory & industries</span>
                                </h2>
                                <div className="text">
                                    <p>Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. It's time to put on makeup. It's time to dress up right.They're all together ooky the Addams Family doin' it our way. There's nothing we wont try. Never heard the word impossible. This time there's no stopping us.</p>
                                </div>
                                <div className="fact-counter">
                                    <ul>
                                        <li className="single-fact-counter">
                                            <div className="icon-holder"><span className="flaticon-social"></span></div>
                                            <span className="timer" data-from="1" data-to="2456" data-speed="5000" data-refresh-interval="50">2456</span>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <h3>Engineers & Workers</h3>
                                        </li>
                                        <li className="single-fact-counter">
                                            <div className="icon-holder"><span className="flaticon-landscape"></span></div>
                                            <span className="timer" data-from="1" data-to="640" data-speed="5000" data-refresh-interval="50">640</span>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <h3>Factory in Worldwide</h3>
                                        </li>
                                        <li className="single-fact-counter">
                                            <div className="icon-holder"><span className="flaticon-innovation"></span></div>
                                            <span className="timer" data-from="1" data-to="3250" data-speed="5000" data-refresh-interval="50">3250</span>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <h3>Projects Completed</h3>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="why-chooseus sec-padd2">
                <div className="container">

                    <div className="section-title center">
                        <h2>why choose Us</h2>
                    </div>

                    <div className="row">


                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" >


                                <div className="icon_box">
                                    <span className="flaticon-people-1"></span>
                                </div>

                                <h4>EXPERIENCED</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. </p></div>
                            </div>
                        </div>
                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" >


                                <div className="icon_box">
                                    <span className="flaticon-sun"></span>
                                </div>

                                <h4>PROFESSIONAL SERVICE</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now.</p></div>
                            </div>
                        </div>
                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" >


                                <div className="icon_box">
                                    <span className="flaticon-people-2"></span>
                                </div>

                                <h4>PUBLIC PROJECTS</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now.</p></div>
                            </div>
                        </div>
                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms">


                                <div className="icon_box">
                                    <span className="flaticon-factory"></span>
                                </div>

                                <h4>SUPERIOR QUALITY</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. </p></div>
                            </div>
                        </div>
                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms">


                                <div className="icon_box">
                                    <span className="flaticon-arrows"></span>
                                </div>

                                <h4>COMPETITIVE PRICE</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. </p></div>
                            </div>
                        </div>
                        <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">

                            <div className="inner-box wow fadeIn animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" >


                                <div className="icon_box">
                                    <span className="flaticon-technology-1"></span>
                                </div>

                                <h4>TIME DELIVERY</h4>
                                <div className="text"><p>Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. </p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
