import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './products-item.styles.scss';

const ProductsItem = ({id, title, url, addItem}) => {
  return (
    <div className = 'product-container'>
      <div className='image-contanier'>
        <img alt="product" src={url}></img>
      </div>
      <div className='button-container'>
        <CustomButton className='custom-button' onClick={() => addItem({id, title, url})} inverted>
          ADD TO CART
        </CustomButton>
      </div>
      <h3> {title} </h3>
    </div>
  );
};
  
  const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(
    null,
    mapDispatchToProps
  )(ProductsItem);