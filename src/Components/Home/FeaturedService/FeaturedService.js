import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section style={{marginBottom:'100px'}} className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" style={{ width: '95%', height: '450px' }} src={featured} alt="" />
                </div>
                <div className="col-md-7">
                    <h2 style={{fontSize:'40px'}} className="mb-5">Exceptional Dental <br />Care, on Your Terms</h2>
                    <p className="text-secondary" style={{ fontSize: "20px" }}>   Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit.
                    </p>

                    <button className="btn-primary mt-5">Learn More</button>

                </div>
            </div>

        </section>
    );
};

export default FeaturedService;