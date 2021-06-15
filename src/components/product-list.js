import { useStoreState } from 'easy-peasy';
import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd'

export default function ProductList() {

  const products = useStoreState(state => state.products.items);

  return (
    <div>
      <Divider orientation='left'>Our products</Divider>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </div>
  );
}
