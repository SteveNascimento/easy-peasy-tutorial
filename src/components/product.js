import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useCallback, useState } from 'react';

export default function Product({ id }) {

  const addProductToBasket = useStoreActions(
    actions => actions.basket.addProduct
  )

  // load the required product from state
  const product = useStoreState( state => state.products.getById(id))

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    await addProductToBasket(product.id);
    setAdding(false);
  }, [product]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>
        <em>£ {product.price}</em>
      </p>
      {adding ? (
        'Adding...'
      ) : (
        <button onClick={onAddToBasketClick}>Add to basket</button>
      )}
    </div>
  );
}
