import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy'
import './basket-count.css'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function BasketCount() {

  const basketCount = useStoreState(state => state.basket.count)

  return (
    <Badge count={basketCount}>
      <Link className="BasketCount" to="/basket" > Carrinho <ShoppingCartOutlined /></Link> 
    </Badge>
  );
}
