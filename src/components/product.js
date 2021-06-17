import { useStoreActions } from 'easy-peasy';
import React, { useState } from 'react';
import { Button, message, Card } from 'antd';
import 'antd/dist/antd.css'
import './product.css'


export default function Product({item, op, idx}) {

  const addProductToBasket = useStoreActions(
    actions => actions.basket.addProduct
  )

  const removeProductFromBasket = useStoreActions(
    actions => actions.basket.removeProduct
  )

  const [alt, setAlt] = useState(false);

  const onAddToBasketClick = async () => {
    setAlt(true);
    await addProductToBasket(item);
    setAlt(false);
    message.success(
      'Produto adicionado ao carrinho!'
    );
  }

  const onRemovingProductFromBasket =  async () => {
    setAlt(true)
    await removeProductFromBasket({item, idx})
    setAlt(false)
    message.success(
      'Produto removido do carrinho com sucesso!'
    )
  }

  const accomplishOperation = async () => {
    if (op === 'Remover') {
      await onRemovingProductFromBasket(idx)
    } else if (op === 'Adicionar') {
      await onAddToBasketClick()
    }
  }

  return (
    <Card title={item.name} className='Card'>
      <div>
        <p>R$: {item.price} </p>
        <Button loading={alt ? true : false} type='primary' onClick={accomplishOperation}>{op}</Button>
      </div>
    </Card>
  );
}
