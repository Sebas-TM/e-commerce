import '../styles/footer.css'
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="cols">
                <div className="col">
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <CiMail />
                                Mail
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <FaGithub />
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link target='blank' to={'www.linkedin.com/in/victortimoteo'}>
                                <IoLogoLinkedin />
                                Linkedin
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link to={'/'}>Shop</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Products</Link>
                            </li>
                            <li>
                                <Link to={'/about-us'}>About us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col">
                    <p>
                        This website was developed by Victor Timoteo
                    </p>
                </div>
            </div>
            <p className='copyright'>{`All rights reserved © Copyright ${year}`}</p>
        </footer>
    );
}

export default Footer;