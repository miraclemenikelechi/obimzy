import './index.scss';
import { FooterComp, Newsletter } from '../../components';


const Footer = () => {
    return (
        <footer>
            <Newsletter />
            <FooterComp />
        </footer>
    );
};

export default Footer;