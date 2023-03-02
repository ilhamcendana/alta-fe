/** Libs */
import axios from 'axios';
import { useFetcher } from 'hooks/fetcher';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteData, submitData } from 'store/reducer-products';
/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function Home() {
  // State  
  const [itemName, itemNameSet] = useState('');
  const [price, priceSet] = useState('');

  // Hooks
  const { data: dataProducts } = useSelector((state) => state.products);
  const { userData } = useSelector((state) => state.me);
  const dispatch = useDispatch();  

  // Func
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // allItemsSet(prev => [...prev, { item: itemName, price }]);
    dispatch(submitData({ item: itemName, price: price }));
    itemNameSet("");
    priceSet("");
  }

  const deleteItem = (val) => {
    dispatch(deleteData(val))
  }

  const editItem = (itemVal) => {
    itemNameSet(itemVal?.item);
    priceSet(itemVal?.price);
    deleteItem(itemVal?.item);
  }
  // Use Effect

  return (
    <main>
      <button onClick={() => {
        Cookies.remove("token");
        window.location.reload();
      }}>
        <span>Logout</span>
      </button>

      {dataProducts.length > 0 &&
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {dataProducts.map((i) => (
            <div style={{ display: 'flex', gap: 16 }}>
              <span>{i?.item}</span>
              <span>{i?.price}</span>
              <button onClick={() => deleteItem(i?.item)}>delete</button>
              <button onClick={() => editItem(i)}>edit</button>
            </div>
          ))}
        </div>
      }

      <form onSubmit={onSubmitHandler}>
        <div>
          <div style={{ display: 'flex', gap: 4, flexDirection: 'column', marginBottom: 8 }}>
            <label>Item</label>
            <input value={itemName} onChange={(e) => itemNameSet(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: 4, flexDirection: 'column', marginBottom: 8 }}>
            <label>Price</label>
            <input value={price} onChange={(e) => priceSet(e.target.value)} />
          </div>
        </div>

        <button style={{ marginTop: 12, width: '100%' }} type='submit'>Submit</button>
      </form>

      <div>
        <h3>USER</h3>
        <p>Name: {userData?.name}</p>
        <p>Email: {userData?.email}</p>
      </div>
    </main>
  )

}