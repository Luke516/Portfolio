import React from 'react';
import { Link } from 'react-scroll';
import Card from './Card/Card';
import Data from './Card/Data';
import pic from './Card/images/man.jpg'

const Services = () => {
    return(
        <>
            <div className='container' id='about'>
                <section className='d-flex align-items-center about-me' >
                    <div className='container-fluid mb-5'>
                        <div className='row'>
                            <div className='col-10 mx-auto'>
                                <div className='row'>
                                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                        <h1>
                                            About Me
                                        </h1>
                                        <h4 className='my-3' id='sub'>
                                        I am currently pursuing Bachelor of Computer Appications from Vivekananda Institute of Professional Studies,
                                        and I also enjoy designing websites.
                                        </h4>
                                        <div className='mt-3'>
                                            <Link 
                                                to="heading"
                                                className='btn btn-outline-primary' 
                                                id='get_started'
                                                smooth={true}
                                                spy={true}
                                            >
                                                Tools I Use
                                            </Link>
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
                <div className='my-5' >
                    <h1 className='text-center' id='heading'>Tools I Use</h1>
                </div>
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row gy-4'>
                                {
                                    Data.map((val, ind) =>{
                                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;