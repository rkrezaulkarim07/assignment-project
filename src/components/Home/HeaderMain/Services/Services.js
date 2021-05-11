import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 2000 });

const Services = () => {
    return (
        <div className="text-center">
            <h1 className="mb-5 mt-5">Our Services</h1>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div data-aos="fade-right" class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/rM6ySpw/CUSTOMER-SERVICE.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Motherboard Problem</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                        </div>
                        <div data-aos="fade-down" class="col">
                            <div class="card">
                                <img src="https://i.ibb.co/3YHmWvT/water-damage.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Water Solution</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    </div>
                            </div>
                            <div data-aos="fade-left" class="col">
                                <div class="card">
                                    <img src="https://i.ibb.co/vhnnRBC/unlocking.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Lock Problem</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                        </div>
                                </div>
                                <div data-aos="fade-up" class="col">
                                    <div class="card">
                                        <img src="https://i.ibb.co/12zhDsD/motherboard1.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">Sound Problem</h5>
                                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    );
};

export default Services;