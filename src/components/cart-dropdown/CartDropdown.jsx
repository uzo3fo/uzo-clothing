import React from 'react';

import CustomBtn from '../custom-btn/CustomBtn';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux'

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem =>(
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
    </div>
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

const mapStateToProps = ({cart: { cartItems }}) =>({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);