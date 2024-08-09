import React, { useEffect, useState } from 'react';
import './NewCollections.css'
import newCollection from '../Assets/data/new_collections'
import Item from '../Item/Item';
import axios from 'axios';

export default function NewCollections() {

  // const [newCollection, setNewCollection] = useState([]);

  // useEffect(() => {
  //   axios.get('newCollections API endpoint')
  //   .then(response => setNewCollection(response.data))
  //   .catch(error => console.log(error));
  // }, []);
  
  return (
    <div className='new-collections'>
        <h2>LATEST ENTRIES</h2>
        <hr />
        <div className="collections">
            {newCollection.map((item, index) => {
                return (<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
            })}
        </div>
    </div>
  )
}
