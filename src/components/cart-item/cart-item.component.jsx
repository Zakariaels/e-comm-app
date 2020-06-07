import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {url, title, quantity}}) => (
  <div className='cart-item'>
    <img src={url} alt='item' />
    <div className='item-details'>
      <span className='title'>{title}</span>
      <span className='quantity'> {quantity} {quantity === 1 ? 'x item' : 'x items'} </span>
    </div>
  </div>
);

export default CartItem;