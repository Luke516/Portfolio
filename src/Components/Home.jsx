import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from './Card/images/img.jpg';

const Home = () => {
    return(
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1>
                                    Hi I'm <strong className='name'>Harshil Gambhir</strong>
                                    </h1>
                                    <h4 className='my-3' id='sub'>
                                    I am a Front-End Web Developer 
                                    </h4>
                                    <div className='mt-3'>
                                        <NavLink to="/about" className='btn btn-outline-primary' id='get_started'>
                                            About me
                                        </NavLink>
                                    </div>
                                </div>
                            
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={pic} className='img-fluid' id="animated" alt='img' />
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;