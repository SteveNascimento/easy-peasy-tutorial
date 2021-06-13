import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Basket() {
  // map the items in our basket against the product state
  // so we can show the names of the products in our basket

  const removeProductFromBasket = useStoreActions(
    actions => actions.basket.removeProduct
  )

  const basketProducts = useStoreState(state =>
    state.basket.productIds.map(productId => 
      state.products.items.find(product => product.id === productId)
    )
  );

  return (
    <div>
      <h2>The merchandise</h2>
      <ul>
        {basketProducts.map((product, idx) => (
          <li key={idx}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>{' '}
            <button onClick={() => removeProductFromBasket(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
