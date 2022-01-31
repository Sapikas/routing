import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(()=>{
      fetchItems()
  }, [])  

  const [items, setItems] = useState([]);

  const fetchItems =  async () =>{
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
      const items = await data.json();
      console.log(items);
      setItems(items)
  }

  return (
    <div className="App">
        {items.map(item=> 
        <h3 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h3>
        )}
    </div>
  );
}

export default Shop;
