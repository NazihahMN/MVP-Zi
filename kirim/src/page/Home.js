import React from 'react';
import './Home.css';
// import img1 from './../busymom.jpeg';
// import img2 from './../babysitting.jpg';
// import img3 from './../moving.jpeg';
import cleanicon from './../cleanicon.png';
import babyicon from './../babyicon.png';
import move from './../move.png';


function Home() {
    return (
        <div className="container">
        <div className="row welcome text-center">

        <div className="container-fluid padding">
        <div className="row text-center padding">
    
        <section className="" id="helper">
            <div className="container">
                <div className="col-sm-12 col-md-12 mb-4">
                    <h1 className="text-center text-secondary mt-4">What We Offer?</h1>
                    <hr></hr>
                    <br></br>
                    <h2> Simple — just enter your personal details and choose your preferred time.
                    <br></br>
                    Our top-rated on demand helper services are ready to help to take the stress out of your life!</h2>
                    <br></br>
                    <h5>✨We’ll clean your living room, kitchen, bedrooms and bathrooms – just the way you want it!<br></br><br></br>
                        ✨Choose between one-time or any of your prefferable time – whatever works best for you!<br></br><br></br>
                        ✨We’re delivering best quality of cleaning as we are passionate about cleanliness and comfiness!<br></br><br></br>
                        ✨Your house will look top-notch clean and we guarantee that you won’t recognise it!</h5>
                </div>
            <div className="accordion" id="accordianEg">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded>Cleaning</button>
                        </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parents="#accordianEg">
                    <img className="cleanicon" src={cleanicon}/>
                        <div className="card-body">
                        <br></br>
                        Organise furniture and items.
                        <br></br>
                        Vacuum and mop floors.
                        <br></br>
                        Throw away rubbish.
                        <br></br>
                        <br></br>
                        Our basic cleaning start from wiping dust and clean all surfaces – coffee table, cabinets.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded>Babysitting</button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parents="#accordianEg">
                    <img className="babyicon" src={babyicon}/>
                        <div className="card-body">
                            <br></br>
                            Diapers?
                            <br></br>
                            Glitters?
                            <br></br>
                            Biscuit crumbs?
                            <br></br>
                            Spill Water everywhere on floor?
                            <br></br>
                            <br></br>
                            No worries, we take care of baby and toddlers up until 12 years old!
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded>Moving Somewhere?</button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parents="#accordianEg">
                    <img className="move" src={move}/>
                        <div className="card-body">
                            Moving is undeniably a tough and time consuming.
                            <br></br>
                            Contact us, we KIRIM a helper to ease your burden.
                            <br></br>
                            We'll ensure we leave you with a sparkling clean home!
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;
