import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const Contact = () => {


    const [tosend, setToSend] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setToSend({ ...tosend, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setToSend('')
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (tosend.name === '' || tosend.email === '' || tosend.subject === '' || tosend.phone === '') {
            toast.dismiss();
            toast.error('Please fill all (*) field.');
        } else {
            send('service_dncwawd', 'template_wlwdttt', tosend, 'user_HtLqx4tyNaHHOCpyZNJ7K')
                .then((result) => {
                    resetForm();
                    if (result) {
                        toast.dismiss();
                        toast.success('Your message has been sent successfully');
                    }
                    // console.log('Result', result.status, result.text);
                })
                .catch((err) => {
                    if (err) {
                        toast.dismiss();
                        toast.error('Something went wrong, Please try after sometimes!')
                    }
                    // console.log('Failure...', err)
                });
        }



    }

    return (
        <>



            <section className="breadcrumb-area" style={{ backgroundImage: process.env.PUBLIC_URL + 'url(images/background/3.jpg);' }}>
                <div className="container text-center">
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="contact-form-area sec-padd-top">
                <div className="container">
                    <div className="section-title">
                        <h2>get in <span className="thm-color">touch</span></h2>
                        <p>Sometimes you want to go where everybody knows your name. And they're always glad you <br /> came. Straight nin' the hills Someday the mountain will.</p>
                    </div>

                    <div className="row">

                        <div className="col-md-8">

                            <div className="contact-form">
                                <form onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" value={tosend.name} onChange={handleChange} placeholder="Your Name*" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" value={tosend.email} onChange={handleChange} placeholder="Your Email*" required="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="number" name="phone" value={tosend.phone} onChange={handleChange} placeholder="Phone*" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="subject" value={tosend.subject} onChange={handleChange} placeholder="Subject*" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea type="text" name="message" placeholder="Your Message*" value={tosend.message} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <button className="thm-btn bg-clr1" type="submit" name="submit" data-loading-text="Please wait...">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="footer-contact-info">
                                <div className="title">
                                    <h4>Quick Contact</h4>

                                </div>
                                <ul className="clearfix">
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
                                            <Link to="/"><p>rdengg26566@gmail.com</p></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact;
