import './index.scss';
import { Text } from '../../components/inputs';
import { Long } from '../../components/buttons';
import { loginForm } from '../../assets/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });


    function handleSubmit(event) {
        event.preventDefault();
    }


    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }


    return (
        <section className='signIn'>
            <div className="signIn-wrapper">
                <h3>login</h3>

                <hr />

                <div className="form-container">
                    <form
                        className="form-wrapper"
                        onSubmit={handleSubmit}
                    >

                        {
                            loginForm.map((data) => {
                                const { id, name, placeHolder, type } = data;

                                return (
                                    <div className="form-input" key={id}>
                                        <Text
                                            name={name}
                                            title={placeHolder}
                                            type={type}
                                            value={values[name]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                );
                            })
                        }

                        <div className="form-input">
                            <Long
                                icon={null}
                                to={null}
                                title={"login"}
                                type={"submit"}
                            />
                        </div>

                    </form>
                </div>

                <div className="middle-content">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <div className="bottom-content">
                    <div className="form-input">
                        <Long
                            icon={null}
                            to={null}
                            title={"Continue with Google"}
                        />
                    </div>

                    <div>
                        Don't have an account? <span><Link>Sign up</Link></span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignIn;