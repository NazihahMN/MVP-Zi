import React, {useState, useEffect} from 'react';
import './Request.css';

function Request() {
    let [requests, setRequests] = useState([]);
    let [input, setInput] = useState({});

    useEffect(() => {
        fetch("/requests")
            .then(response => response.json())
            .then((json) => {
                setRequests(json);
    })
            .catch((error) => {});
    }, []);

    const handleChange = event => {
        let allInput = {};
        allInput[event.target.name] = event.target. value;
        setInput({ ...input, ...allInput });
    };

    const handleSubmit = event => {
        event.preventDefault();
        addRequests();
    };

    const addRequests = () => {
        fetch("/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
            .then(response => response.json())
            .then(data => {
                setRequests(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
      <div className="container">
        <div className='request'>
            <div className='about'>
            <div className="col-12">
            <h1 className="text-center text-secondary mt-4">Hire My On Demand Helper</h1>
            </div>
            <hr></hr>
        </div>
            <div className="container"></div>
            <form onSubmit={e => handleSubmit(e)}>
              <div className="requester-detail">
                <div className="input-box">
                  <span className="details">Name</span>
                  <input name="name" placeholder="Enter your name" onChange={e => handleChange(e)} required></input>
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <input name="address" placeholder="Enter your full address" onChange={e => handleChange(e)} required></input>
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input name="hp" placeholder="Enter your phone number" onChange={e => handleChange(e)} required></input>
                </div>
                <div className="input-box">
                  <span className="details">Service Required</span>
                  <input name="servicetype" placeholder="Enter your service required" onChange={e => handleChange(e)} required></input>
                </div>
                <div className="input-box">
                  <span className="details">Preferred Time</span>
                  <input name="timeslot" placeholder="Enter in 00:00:00 format" onChange={e => handleChange(e)} required></input>
                </div>
                <div className="input-box">
                  <span className="details">Preferred Date</span>
                  <input name="dateslot" placeholder="Enter in YYYY-MM-DD format" onChange={e => handleChange(e)} required></input>
                <div className="button">
                  <input type="submit" value="Done"></input>
                </div>
          </div>
          </div>
            </form>
         </div>
      </div>
    )
}

export default Request