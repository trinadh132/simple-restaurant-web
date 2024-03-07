import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Data from './restaurant.json'

function Home() {
  const [obj, setObj] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10); 

  const load = () => {
    const newData = Data.slice(currentIndex, currentIndex + 10); 
    setObj(obj.concat(newData)); 
    setCurrentIndex(currentIndex + 10); 
  }

  useEffect(() => {
    setObj(Data.slice(0, 10)); 
  }, []);

  function Box({ name, categories, stars, contact,id }) {
    let navigate = useNavigate();
    return (
      <div className='dir'>
        <div className="box">
          <img src='download.jpeg' alt={name} />
          <h2>{name}</h2>
          <p>Categories: {categories.join(', ')}</p>
          <p>Contact: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>Rating: {stars}</p>
          <div className="book">
          <button  onClick={() => navigate(`/Contact/${name}`)}>book a table </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className='dir'>
        {obj.map((eachObj) => {
          const { name, categories, _id, stars, contact } = eachObj;
          return (
            <Box
              key={_id.$oid}
              name={name}
              categories={categories}
              stars={stars}
              contact={contact}
              id={_id.$oid}
            />
          );
        })}
      </section>
      <div className='bu'>
        <button onClick={load}>Load More</button>
      </div>
    </>
  );
}

export default Home;
