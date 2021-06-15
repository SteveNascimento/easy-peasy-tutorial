import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css'


export default function Basket() {
  // map the items in our basket against the product state
  // so we can show the names of the products in our basket

  const [loadings, setLoadings] = useState([])

  const enterLoading = index => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings]
      newLoadings[index] = newLoadings[index] ? false : true
      return newLoadings
    })
  }

  const removeProductFromBasket = useStoreActions(
    actions => actions.basket.removeProduct
  )

  const basketProducts = useStoreState(state => state.basket.products);

  const onRemovingProductFromBasket =  async (idx) => {
    enterLoading(idx)
    await removeProductFromBasket(idx)
    enterLoading(idx)
  }

  return (
    <div>
      <h2>The merchandise</h2>
      <ul>
        {basketProducts.map((product, idx) => (
          <li key={idx}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>{' '}
            <Button loading={loadings[idx]} onClick={() => onRemovingProductFromBasket(idx)} type="primary" size="small" >Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
