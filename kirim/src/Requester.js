import React, {useState, useEffect} from 'react';

function Requester() {
  let [requests, setRequests] = useState([]); //requests-getter
  let [input, setInput] = useState({});

  useEffect(() => {
    fetch("/requests")
      .then(response => response.json())
      .then((json) => {
        setRequests(json);
        // console.log(requests);
      })
      .catch((error) => {});
  }, []);

  const handleChange = event => {
    let allInput = {};
    allInput[event.target.name] = event.target.value;
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
        setRequests(data); //will display everything abt the data 
        console.log(data);
    })
      .catch(err => {
      console.log(err);
    });
  };

  const deleteRequests = (id) => {
    fetch(`/requests/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setRequests(requests.filter((e) => e.id !== id));
    })
      .catch((err) => {
        console.log(err);
    });
  };

return (
  <div className="App">
    <h1>Get My On Demand Helper</h1>
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
        <div className="input-box">
          <span className="details">Preferred Date</span>
          <input name="dateslot" placeholder="Enter in YYYY-MM-DD format" onChange={e => handleChange(e)} required></input>
        <div className="button">
            <input type="submit" value="Done"></input>
          </div>
          </div>
          </div>
          </div>
      </form>
    </div>
  );

}

export default Requester;