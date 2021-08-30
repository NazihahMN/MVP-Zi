import React, {useState, useEffect} from 'react';

function Admin() {
    let [requests, setRequests] = useState([]);
    //no need to insert input here
    //take useEffect, import it correctly at the top, include the ol at the bottom
    useEffect(() => {
        fetch("/requests")
            .then(response => response.json())
            .then((json) => {
                setRequests(json);
    })
            .catch((error) => {});
    }, []);

    return (
        <div className='admin'>
            <div className='about'>
            <div className="container">
                <div className="col-sm-12 col-md-12 mb-4">
                    <h1 className="text-center text-secondary mt-4">Admin View Only</h1>
                    <hr></hr>
                    <ol>
                        {requests.map(requests => (
                        <li key={requests.id}>
                            {requests.name}
                            <br></br>
                            {requests.address}
                            <br></br>
                            {requests.hp}
                            <br></br>
                            {requests.servicetype}
                            <br></br>
                            {requests.timeslot}
                            <br></br>
                            {requests.dateslot}</li>
                        ))}
                    </ol>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Admin;
