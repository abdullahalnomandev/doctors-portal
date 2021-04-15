import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [

    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }

]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h2>Services With Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5 pt-3">
                    {
                        serviceData.map(service => <ServicesDetails service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;