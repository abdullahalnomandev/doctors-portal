import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div  style={{width:'350px'}} className="card md-auto text-center ms-3 shadow-sm col-md-4 mb-5 p-5">
            <div className="card-body">
                <p className="card-text text-center">{testimonial.quote}</p>
            </div>
            <div className=" d-flex  align-items-center">
                <img className="mx-3" src={testimonial.img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{testimonial.name}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;