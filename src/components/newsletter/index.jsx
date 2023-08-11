import "./index.scss";
import { useState } from 'react';
import { Send } from "../../assets/icons";


const Newsletter = () => {

    const [mail, setMail] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
    }


    function handleChange(event) {
        setMail(event.target.value);
    }


    return (
        <section className="newsletter">
            {/* newsletter inner container */}
            <div className="newsletter-wrapper">

                {/* heading text */}
                <div className="join-header">
                    <span>join our</span>
                    <span>news letters</span>
                </div>

                {/* body text */}
                <div className="join-body">
                    <span>Subscribe for any new updates</span>
                </div>

                {/* subscribe mail container */}
                <div className="subscribe">
                    <form
                        className='subscribe-wrapper'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            name="email"
                            value={mail}
                            placeholder='enter email'
                            onChange={handleChange}
                        />

                        <button type='submit'>
                            <span><Send /></span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Newsletter;