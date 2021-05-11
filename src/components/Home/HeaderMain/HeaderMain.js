import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

AOS.init({ duration: 2000 });

const HeaderMain = () => {
    return (
        <div>
            <div className="row d-flex">
                <div className="col-md-6 text-center m-auto">
                    <h1>We are providing the best <br /> service to our clients.</h1>
                    <h5>Lorem ipsum dolor sit, amet
                    <Typical steps={['ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'ipsum dolor sit amet.']}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h5>
                </div>
                <div data-aos="slide-left" className="col-md-6">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/kH3sVKH/undraw-wireframing-nxyi.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;