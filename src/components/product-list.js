import { useStoreState } from 'easy-peasy';
import React from 'react';
import { Divider, List } from 'antd'
import Product from './product';
import { ShoppingOutlined } from '@ant-design/icons';

export default function ProductList() {

  const products = useStoreState(state => state.products.items);

  return ( 
    <div>
      <Divider orientation='left'>Nossos Produtos <ShoppingOutlined /> </Divider>
      <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }} dataSource={products}
        renderItem={item => (
          <List.Item>
            <Product item={item} op='Adicionar' idx={0}/>
          </List.Item>
        )}
      />
    </div>
  );
}
