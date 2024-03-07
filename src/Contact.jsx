import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from './restaurant.json';
import './App.css'

function Contact()
{
    let{name}=useParams();
    const [obj, setObj] = useState({ contact: { phone: '', email: '' }, stars: '' });
    const [submitted, setSubmitted] = useState(false);
    useEffect(()=>{
    const a=data.find(eachobj=>eachobj.name==name)
    if(a){
        setObj(a);
    }
    else{
        console.log('data not found')
    }
    },[name]);

    const change=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    }
    return(
        <>
        {!submitted ?(
        <div className="order">
        <h1>Welcome to Bookings </h1>
    <form className="frm" onSubmit={change}>
    <div className="sam">
        <label>Name of restaurant:</label>
        <input type="text" value={name} readOnly></input>
    </div>
    <div className="sam">
        <label>Contact:</label>
        <input type="text" value={obj.contact.phone} readOnly></input>
    </div>
    <div className="sam">
        <label>Email:</label>
        <input type="text" value={obj.contact.email} readOnly></input>
    </div>
    <div className="sam">
        <label>Rating:</label>
        <input type="text" value={obj.stars} readOnly></input>
    </div>
    <div className="sam">
        <label>Reservation on:</label>
        <input className="res" type="date" ></input>
    </div>
    <div className="sam">
        <label>Time:</label>
        <input className="time" type="time"></input>
    </div>
    <div className="subm">
    <input  type="submit"></input>
    </div>
</form>
</div>):(<div className="after"><h2>Your booking has been done</h2></div>)}
        </>
    
    )
}

export default Contact;