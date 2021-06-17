import { useStoreState } from 'easy-peasy';
import React from 'react';
import { Divider, List } from 'antd';
import 'antd/dist/antd.css'
import Product from './product';
import { ShoppingCartOutlined } from '@ant-design/icons';


export default function Basket() {
  // map the items in our basket against the product state
  // so we can show the names of the products in our basket


  const basketProducts = useStoreState(state => state.basket.products);
  const basketTotal = useStoreState(state => state.basket.total);

  return (
    <div>
      <Divider orientation="left" className="divider">Seu carrinho <ShoppingCartOutlined/></Divider>
      <List  grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }} dataSource={basketProducts}
        renderItem={item => (
          <List.Item>
            <Product item={item} op='Remover' idx={basketProducts.indexOf(item)}/>
          </List.Item>
        )}
      />
      <h3>Valor Total: R$: {basketTotal.toFixed(2)}</h3>
    </div>
  );
}
