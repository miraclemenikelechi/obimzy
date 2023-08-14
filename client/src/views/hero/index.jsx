import './index.scss';
import { hero } from '../../assets/data';
import { Drop, House, Land, Location, Property, Search } from '../../assets/icons';


const Hero = () => {
    return (
        <>
            {/* hero wrapper */}
            <section className="hero">

                {/* top content wrapper */}
                <div className="top-content">
                    <h1>
                        Find your next dream home
                    </h1>

                    <p>
                        Buy the property of your choice, without any hasseles with OBIMZY <br />
                        Properties, we turn dreams into reality.
                    </p>
                </div>

                {/* middle content wrapper */}
                <div className="middle-content">
                    <div className="content-wrapper">
                        <div className="left">
                            <button>
                                <span>buy</span>
                                <span>
                                    <Drop color='#fff' />
                                </span>
                            </button>
                        </div>

                        <div className="center">
                            <span>Property type</span>
                            <span>
                                <Drop color='#333' />
                            </span>
                        </div>

                        <div className="right">
                            <span>
                                <Search />
                            </span>
                            <input
                                placeholder='Search by location'
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                {/* bottom content wrapper */}
                <div className="bottom-content">
                    {
                        hero.map((item) => {
                            const { id, title, icon, } = item;
                            let jsx;

                            switch (icon) {
                                case "Home":
                                    jsx = <House />;
                                    break;

                                case "Insurance":
                                    jsx = <Property />;
                                    break;

                                case "Location":
                                    jsx = <Location />;
                                    break;

                                case "Land":
                                    jsx = <Land />;
                                    break;
                            }

                            return (
                                <div key={id} className='card-wrapper'>
                                    <span>
                                        {jsx}
                                    </span>

                                    <span>
                                        {title}
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Hero;