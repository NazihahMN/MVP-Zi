import React from 'react';
import img1 from './../cleanhouse.jpg';
import img2 from './../babysitting.jpg';
import img3 from './../moving.jpeg';

function About() {
    return (
        <div className="container">
        <div className='about'>
            <div className="col-12">
            <h1 className="text-center text-secondary mt-4">We handle it for you!</h1>
            </div>
            <hr></hr>
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-12">
                <h3 className="text-center mt-4 text-secondary">On Demand Helper</h3>
            </div>
            </div>
            <div className="row">
                <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                        <img className="card-img-top" src="cleanhouse.jpg" alt=""/>
                        <img className="img" src={img1}/>
                        <div className="card-body">
                            <h4 className="card-title text-secondary">Cleaning</h4>
                            <p className="card-text text-secondary">We turn it to a dust-free home!</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Hire Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                        <img className="card-img-top" src="babysitting.jpg" alt=""/>
                        <img className="img" src={img2}/>
                        <div className="card-body">
                            <h4 className="card-title text-secondary">Babysitting</h4>
                            <p className="card-text text-secondary">We care with love!</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Hire Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                        <img className="card-img-top" src="moving.jpeg" alt=""/>
                        <img className="img" src={img3}/>
                        <div className="card-body">
                            <h4 className="card-title text-secondary">Move-in/Out</h4>
                            <p className="card-text text-secondary">Leave those heavy items to us!</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Hire Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
    )
}

export default About;
