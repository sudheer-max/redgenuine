import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUserStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    registerError: user.registerError
});


const Register = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { currentUser, registerError } = useSelector(mapState);


    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }


    }, [registerError]);

    useEffect(() => {
        if (currentUser) {
            formReset();
            history.push('/');
        }
    }, [currentUser, history]);

    const formReset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors([]);
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(errors);
        dispatch(registerUserStart({
            displayName, email, password, confirmPassword
        }));

    }
    return (

        <section className="contact-form-area sec-padd-top">
            <div className="container">


                <div className="row">

                    <div className="col-md-4">


                    </div>

                    <div className="col-md-4">
                        {errors.length > 0 && (
                            <>
                                {errors((err, index) => {
                                    return (
                                        <p className="invalid-feedback" key={index}>{err}</p>
                                    )
                                })}
                            </>
                        )}
                        <div className="section-title">
                            <h2 style={{ textAlign: 'center' }}>Register</h2>
                            <p style={{ textAlign: 'center' }}>Sign in to your Account!</p>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" name="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Your Name" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email*" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password*" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Your Confirm Password*" required="" />
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                        <button className="thm-btn bg-clr1" type="submit" name="submit" data-loading-text="Please wait...">Sign In</button>
                                    </div>

                                </div><br />



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

export default Register;