import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {



    return (

        <>

            <div class="call-out2">
                <div class="container">
                    <div class="clearfix">
                        <div class="float_left">
                            <h4>Have any question or need any business consultation?</h4>
                        </div>
                        <div class="float_right">
                            <Link to="/contact" class="thm-btn bg-clr2">Request Quote</Link>
                        </div>
                    </div>

                </div>
            </div>

            <footer>
                <div className="footer-main sec-padd2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-col">
                                    <div className="logo-part">
                                        <Link to="#" className="footer-logo text-uppercase">
                                            <img src="images/logo/logo2.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <p className="footer-words">Over 24 years experience and of the international user standards and technological works changes and industrial systems, we dedicated to provide the best and economical. </p>
                                    <ul className="list-inline footer-social">
                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-pinterest-p"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-col service-col">
                                    <h3 className="footer-title">Services</h3>
                                    <ul className="footer-list">
                                        <li><Link to="#">Chemical Research</Link></li>
                                        <li><Link to="#">Material Science</Link></li>
                                        <li><Link to="#">Petroleum and Gas</Link></li>
                                        <li><Link to="#">Mechanical Engineering</Link></li>
                                        <li><Link to="#">Agriculture Processing</Link></li>
                                        <li><Link to="#">Power and Energy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-col post-column">
                                    <h3 className="footer-title">Recent News</h3>
                                    <div className="post-list">
                                        <div className="post">
                                            <div className="post-thumb"><Link to="#"><img src="images/blog/i1.jpg" alt="logo" /></Link></div>
                                            <Link to="#"><h5>Design and Advanced Materials Innovation</h5></Link>
                                            <div className="post-info"><i className="fa fa-calendar"></i>  15 Mar, 2017</div>
                                        </div>
                                        <div className="post">
                                            <div className="post-thumb"><Link to="#"><img src="images/blog/i2.jpg" alt="logo" /></Link></div>
                                            <Link to="#"><h5>Materials for the Gas & Petroleum</h5></Link>
                                            <div className="post-info"><i className="fa fa-calendar"></i> 21 Apr, 2017</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-col">
                                    <h3 className="footer-title">Subscribe Us</h3>
                                    <div className="footer-widget contact-column">

                                        <h5>Subscribe to our newsletter!</h5>
                                        <form action="#">
                                            <input type="email" placeholder="Email address...." />
                                            <button type="submit"><i className="fa fa-paper-plane"></i></button>
                                        </form>
                                        <p>We dont’t do spam and Your mail id very confidential.</p>

                                        <ul className="social-icon">
                                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-feed"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-skype"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="copyright">© {new Date().getFullYear()} all rights reserved</p>
                            </div>
                            <div className="col-md-9">
                                <nav className="footer-menu pull-right">
                                    <ul className="list-inline">
                                        <li><Link to="index-2.html">home</Link></li>
                                        <li><Link to="our-service-1.html">services</Link></li>
                                        <li><Link to="#">term &amp; condition</Link></li>
                                        <li><Link to="#">privacy policy</Link></li>
                                        <li><Link to="contact-us.html">contact us</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
