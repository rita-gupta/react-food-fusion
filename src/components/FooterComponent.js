import React from 'react';
import '../Css/Footer.css';
import {Link} from 'react-router-dom';

function FooterComponent() {
    return (
        <div>
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                        Durbar Marg<br />
                        Opposite to XYZ complex<br />
                        Kathmandu, Nepal<br />
                        Tel.: +977 9860123156<br />
                        Fax: +977 9860123156<br />
                        Email: <a href="mailto:fusion@food.net">fusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i
                                className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook"
                            href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i
                                className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                                className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon  btn-linkedin" href="mailto:"><i
                                className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2020 Food Fusion</p>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default FooterComponent;
