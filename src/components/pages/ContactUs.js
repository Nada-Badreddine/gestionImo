import React from 'react';
import '../../App.css';
import './Contact.scss';

 export default function ContactUs () {
    return (
      
      <>
      <head>
     <title>Create Next App</title>
    <link rel="icon" href="favicon.ico" />
      </head>
            
            <h1>Contact Us</h1>
            <p className="sub-title">lorem ipsum</p>
            <div id="contact-cotainer">
            <div className="contact-info">
                <h4>
                        Contact Information
                    </h4>
                    <p>Fill up the form and then click send</p>


                    <div className="icon-text">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>22 857 968</span>
                    </div>

                    <div className="icon-text">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>Epic@gmail.com</span>
                    </div>

                    <div className="icon-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>

                    <span>Rue Yasser Arafet Sahloul</span>
                    </div>


                    <div className="social-media">
                        <a href="#" className="icon-circle">
                        <i class="fab fa-facebook-square"></i>


                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-twitter"></i>




                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-instagram-square"></i>


                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-youtube"></i>


                        </a>
                    </div>
                </div>
                <form> 
                <p>Fill up the form and then click send</p>
                    <div className="col">
                        <div className="form-group">
                            <label>
                                First Name
                            </label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>
                                Last Name
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>
                                E-mail
                            </label>
                            <input type="email" />
                        </div>
                        <div className="form-group">
                            <label>
                                Phone
                            </label>
                            <input type="tel" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>
                                Message
                            </label>
                            <textarea></textarea>
                        </div>
                        </div>
                        <div className="col">
                            <div className="form-group-solo right">
                                <button className="primary">Send Message</button>
                            </div>
                        </div>
                </form>
            </div>
            </>
        
    )
}