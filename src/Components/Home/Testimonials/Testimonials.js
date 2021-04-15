import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import alis from '../../../images/Ellipse 1.png';
import blis from '../../../images/Ellipse 2.png';
import tlis from '../../../images/Ellipse 3.png';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: alis
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: blis
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: tlis
    }
]
const Testimonials = () => {
    return (
        <section className="mt-5 ">
            <div className="container">
               <div className="ms-5">
               <h5 className="text-primary">TESTIMONIALS</h5>
                <h1>What Our Patients <br /> Says</h1>
               </div>

                <div className="d-flex justify-content-center ">
                    <div className="row">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;