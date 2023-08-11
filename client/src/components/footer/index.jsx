import { Branch, Instagram, LinkedIn, Service, Twitter, Video } from '../../assets/icons';
import { FooterActions, FooterLinks } from '../../assets/data';
import './index.scss';

import { Link } from 'react-router-dom';


const FooterComp = () => {

    return (
        <section className="footer">
            {/* footer section inner container */}
            <div className="footer-wrapper">

                {/* content on the left of footer */}
                <div className="footer-left">
                    <div className="logo">
                        <img src={"logo.png"} alt="brand_logo" />
                    </div>

                    {/* closing text */}
                    <h5>
                        Buy the property of your choice,
                        without any hasseles with OBIMZY Properties,
                        we turn dreams into reality.
                    </h5>

                    {/* social icons */}
                    <div className="socials">
                        <h6>follow us</h6>
                        <div>
                            <span>
                                <Twitter />
                            </span>

                            <span>
                                <LinkedIn />
                            </span>

                            <span>
                                <Instagram />
                            </span>
                        </div>
                    </div>
                </div>

                {/* content on the right of footer */}
                <div className="footer-right">

                    {/* more actions tab top right of footer */}
                    <div className="top">
                        {
                            FooterActions.map((item) => {
                                const { id, icon, title } = item;

                                let jsx;

                                switch (icon) {
                                    case "Branch":
                                        jsx = <Branch />;
                                        break;
                                    case "Service":
                                        jsx = <Service />;
                                        break;
                                    case "Video":
                                        jsx = <Video />;
                                        break;
                                }

                                return (
                                    <article key={id}>
                                        <div>
                                            <span>
                                                {jsx}
                                            </span>
                                        </div>

                                        <span>{title}</span>
                                    </article>
                                );
                            })
                        }
                    </div>

                    <div className="bottom">
                        {
                            FooterLinks.map((item) => {
                                const { id, title, children } = item;
                                return (
                                    <div key={id}>
                                        <h6>{title}</h6>
                                        <ul>
                                            {
                                                children.map((child, index) => {
                                                    const { title, to } = child;
                                                    return (
                                                        <li key={index}>
                                                            <Link to={to}>{title}</Link>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterComp;