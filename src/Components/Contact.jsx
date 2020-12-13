import React from 'react';
import Social from './Social';

const Contact = () => {
    return(
        <>
            <div>
            <section id='contact-header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1>
                                    Get In Touch
                                    </h1>
                                    <h4 className='my-3' id='sub'>
                                    If you wanna get in touch, talk to me about a project collaboration or just say hi,
                                    send an email to <a href='https://mail.google.com/mail/?view=cm&fs=1&to=harshilgambhir3@gmail.com' className='mail'>harshilgambhir3@gmail.com</a> and ~let's talk.
                                    </h4>
                                </div>
                            
                            <div className='col-lg-6 order-1 order-lg-2 '>
                                <Social/>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            </div>
            
        </>
    );
}

export default Contact;