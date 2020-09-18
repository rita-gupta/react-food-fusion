import React from 'react';
import '../Css/ContactUS.css';


function ContactUsComponent() {
    return (
        <div>

            <div className="row contact__row">
                <div className="col-12 m-1">
                    <h3 >Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        Durbar Marg<br/>
                            Opposite to XYZ complex<br/>
                                Kathmandu, Nepal<br/>
                                    <i className="fa fa-phone fa-lg font-icon"></i>Tel.: +977 9860123156<br/>
                                        <i className="fa fa-fax fa-lg font-icon"></i>Fax: +977 9860123156<br/>
                                            <i className="fa fa-envelope fa-lg font-icon"></i>Email: <a href="mailto:fusion@food.net">fusion@food.net</a>
                </address>
         </div>
                                    <div className="col-12 col-sm-6 offset-sm-1">
                                        <h5>Map of our Location</h5>
                                    </div>
                                    <div className="col-12 col-sm-11 offset-sm-1">

                                        <div className="btn-group" role="group">
                                            <a role='button' className="btn btn-primary"><i className="fa fa-phone fa-lg font-icon"></i>Call</a>
                                            <a role="button" className="btn btn-success"><i className="fa fa-skype fa-lg font-icon"></i>Skype</a>
                                            <a role="button" className="btn btn-danger"><i className="fa fa-envelope fa-lg font-icon"></i>Email</a>
                                        </div>
                                    </div>
     </div>        </div>
    )
}

export default ContactUsComponent;