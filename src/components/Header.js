import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';
import AdminLink from './AdminLink';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = (props) => {
    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);
    return (

        <>
            <section className="top-bar-area">
                <div className="container">
                    <div className="clearfix">
                        <div className="pull-left"><p>Welcome to RD ENGINEERING WORKS</p></div>
                        <div className="pull-right">
                            <p><i className="fa fa-clock-o"></i>Monday - Saturday : 10:00 AM to 8:00 PM</p>
                        </div>
                    </div>

                </div>
            </section>
            <header className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                            <div className="logo">
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + "images/logo/logo.png"} alt="Awesome Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12">
                            <div className="header-contact-info">
                                <ul>
                                    <li>
                                        <div className="iocn-holder">
                                            <span className="fa fa-home"></span>
                                        </div>
                                        <div className="text-holder">

                                            <h6>SR.NO.116, Hissa NO. 2B,</h6>
                                            <p>Vasai(W), MH- 401208</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="iocn-holder">
                                            <span className="icon-technology-1"></span>
                                        </div>
                                        <div className="text-holder">
                                            <h6>Call Us On</h6>
                                            <p>+91-8652124344</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="iocn-holder">
                                            <span className="icon-letter-1"></span>
                                        </div>
                                        <div className="text-holder">
                                            <h6>Mail Us @</h6>
                                            <Link to="#"><p>rdengg26566@gmail.com</p></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="mainmenu-area stricky">
                <div className="container">
                    <div className="mainmenu-bg">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 col-xs-12">

                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">

                                            <li className="dropdown"><Link to="/">home</Link></li>
                                            <li className="dropdown"><Link to="/about">About us</Link></li>
                                            <li className="dropdown"><Link>Services</Link>
                                                <ul>
                                                    <li><Link to="/rd-genuien-parts">RD Genuine Parts (Automotive)</Link></li>
                                                    <li><Link to="/precision-turned-parts">Precision Turned Parts</Link></li>
                                                    <li><Link to="/valve-flanges">Valve & Flanges</Link></li>
                                                    <li><Link to="/hose-fitting">Hose Fitting</Link></li>
                                                    <li><Link to="/ss-water-bottle">SS Water Bottle</Link></li>
                                                </ul>
                                            </li>
                                            <AdminLink></AdminLink>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            {!currentUser && (
                                                <>
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/register">Register</Link></li>
                                                </>
                                            )}
                                            {currentUser && (
                                                <li><Link onClick={signOut}>Logout</Link></li>
                                            )}
                                        </ul>
                                        <ul className="mobile-menu clearfix">

                                            <li><Link to="/">home</Link></li>
                                            <li><Link to="/about">About us</Link></li>
                                            <li className="dropdown"><Link to="/service">Services</Link>
                                                <ul>
                                                    <li><Link to="/rd-genuien-parts">RD Genuine Parts (Automotive)</Link></li>
                                                    <li><Link to="/precision-turned-parts">Precision Turned Parts</Link></li>
                                                    <li><Link to="/valve-flanges">Valve & Flanges</Link></li>
                                                    <li><Link to="/hose-fitting">Hose Fitting</Link></li>
                                                    <li><Link to="/ss-water-bottle">SS Water Bottle</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="contact.html">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </nav>

                            </div>

                        </div>
                        <div className="right-column">
                            <div className="right-area">
                                <div className="nav_side_content">
                                    <div className="search_option">
                                        <button className="search tran3s dropdown-toggle color1_bg" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        <form action="#" className="dropdown-menu" aria-labelledby="searchDropdown">
                                            <input type="text" placeholder="Search..." />
                                            <button><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>

                                </div>
                                <div className="link_btn float_right">
                                    <Link to="contact.html" className="thm-btn bg-clr1">GET A Quote</Link>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

Header.defaultProps = {
    currentUser: null
}





export default Header;
