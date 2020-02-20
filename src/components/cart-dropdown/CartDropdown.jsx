import React from 'react';

import CustomBtn from '../custom-btn/CustomBtn';

import './cart-dropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

export default CartDropdown;