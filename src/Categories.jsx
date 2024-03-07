import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import deta from './restaurant.json'
import './App.css';

const Form=( {data,onSearch})=>{
    return(
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
            <input className="form" type="text" placeholder="search the restaurant you like" name="res" value={data} onChange={onSearch}></input>
        </form>
    )
}




function Categories(){
    const a=null;
const[data,setData]=useState("");
const [obj, setObj] = useState([]);
const search=(e)=>{
    setData(e.target.value)
}

useEffect(()=>{
    const b = deta.filter(item => item.name.toLowerCase().includes(data.toLowerCase()));
  setObj(b);
},[data]);
function Box({ name, categories, stars, contact, id }) { 
  let navigate = useNavigate();

  return (
    <div className='dir'>
    <div className="box">
      <img src='download.jpeg' alt={name} />
      <h2>{name}</h2>
      <p>Categories: {categories.join(', ')}</p>
      <p>Contact: {contact.phone} </p>
      <p>Email: {contact.email}</p>
      <p>Rating: {stars}</p>
      <div className="book">
          <button  onClick={() => navigate(`/Contact/${name}`)}>book a table </button>
          </div> 
    </div>
    </div>
  );
}




    return(
        <>
        <Form data={data} onSearch={search}/>
        <section className='dir'>
        {obj.map((eachObj) => {
  const { name, categories, _id, stars, contact } = eachObj;
  return (
    <Box 
      key={_id.$oid}
      name={name}
      categories={categories}
      id={_id.$oid} 
      stars={stars}
      contact={contact}
    />
  );
})}

    </section>
    </>
        
    )
}

export default Categories;