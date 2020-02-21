import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <h1 className='shopping-icon'>cart</h1>
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state=>({
  itemCount : selectCartItemsCount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);