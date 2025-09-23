import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Footer.css'
import Logo from '../assets/Setsail.webp'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    {/* First Column.. */}
                    <div className="footer-first-column col-lg-3 col-md-6 col-sm-12">

                        <img src={Logo} alt="Error 404" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quaerat.</p>

                        <a href="#">
                            <i className="bi bi-envelope"></i> setsail@example.com
                        </a>

                        <br />

                        <a href="#">
                            <i className="bi bi-telephone-fill"></i> 1 562 867 5309
                        </a>

                        <br />

                        <a href="#" className="footer-first-column-location">
                            <i className="bi bi-geo-alt"></i> Broadway & Morris St, New York
                        </a>

                    </div>

                    {/* Second Column.. */}
                    <div className="footer-second-column col-lg-3 col-md-6 col-sm-12 mt-3">

                        <h4> <b> Our Recent Posts </b> </h4>

                        <p>Visit Bali, Thailand And China</p>

                        <a href="#">September 7, 2016</a>

                        <p>The Sound Of Our Jungle</p>

                        <a href="#">September 7, 2016</a>

                        <p>New Year, New Resolution</p>

                        <a href="#">September 7, 2016</a>

                    </div>

                    {/* Third Column.. */}
                    <div className="footer-third-column col-lg-3 col-md-6 col-sm-12 mt-3">

                        <h5> <b> Subscribe To Our Newsletter </b> </h5>

                        <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                        
                        <form action="#">
                            <div className="input-group">
                                <span> <i className="bi bi-person-fill"> </i> </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <span> <i className="bi bi-envelope-fill"> </i> </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <input className="footer-subscribe" type="submit" value="Subscribe" />

                        </form>

                    </div>

                    {/* Fourth Column.. */}
                    <div className="footer-fourth-column col-lg-3 col-md-6 col-sm-12 mt-3">

                        <h5> <b> Our Instagram </b> </h5>

                        <p>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</p>

                    </div>

                </div>

                {/* Copyright.. */}
                <div className="footer-copyright">

                    {/* <p>© 2018 <a href="#">Qode Interactive</a></p> */}
                    <p>Developed By @ <a href="https://www.linkedin.com/in/gaurav-melwani-0b047b263/" target="_blank">Gaurav Melwani</a></p>

                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
