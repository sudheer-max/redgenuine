import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    registerError: user.registerError
});

const ForgotPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { registerError, resetPasswordSuccess } = useSelector(mapState);

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            history.push('/login');
        }
    }, [resetPasswordSuccess, history]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));

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
                            <h2 style={{ textAlign: 'center' }}>Forgot Your Password!</h2>
                            <p style={{ textAlign: 'center' }}>We'll email you instruction on how to reset it!</p>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Registered Email" required="" />
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                        <button className="thm-btn bg-clr1" type="submit" name="submit" data-loading-text="Please wait...">Reset Password</button>
                                    </div>

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

export default ForgotPassword;