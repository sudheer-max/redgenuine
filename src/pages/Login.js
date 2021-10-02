import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Google from '../components/Google';
import { emailLoginStart, googleLoginStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Login = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleSignIn = () => {
        dispatch(googleLoginStart());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(emailLoginStart({ email, password }));

    }


    return (
        <section className="contact-form-area sec-padd-top">
            <div className="container">


                <div className="row">

                    <div className="col-md-4">


                    </div>

                    <div className="col-md-4">
                        <div className="section-title">
                            <h2 style={{ textAlign: 'center' }}>Login</h2>
                            <p style={{ textAlign: 'center' }}>Please enter your email and password!</p>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Mail*" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password*" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <p><span><Link to="/forgot-password">Forgot Password</Link></span></p>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                        <button className="thm-btn bg-clr1" type="submit" name="submit" data-loading-text="Please wait...">Login</button>
                                    </div>

                                </div><br />

                                <div className="row">
                                    <div className="col-md-12">
                                        <Google class="thm-btn bg-clr1" onClick={handleGoogleSignIn} >Login with Google</Google>
                                    </div><br />

                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">


                    </div>



                </div>
            </div>
        </section>

    )
}


export default Login;
