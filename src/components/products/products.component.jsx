import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchProductsStartAsync} from './../../redux/data/data.actions';
import ProductsItem from './../../components/products-item/products-item.component';
import FullPageLoader from './../../components/full-page-loader/full-page-loader.component';
import {
    selectproducts,
    selectsearchField,
    selectoffset,
    selectperPage,
  } from '../../redux/data/data.selectors';

import './products.styles.scss';

const  Products = ({products, 
                    searchField, 
                    offset,
                    perPage,
                    fetchProductsStartAsync
                  }) => {

  useEffect(() => {
    fetchProductsStartAsync();
  }, [fetchProductsStartAsync])

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchField.toLowerCase())
  });
  const pageProducts = filteredProducts.slice(offset, offset + perPage);
  
  return (
      <div>
          <FullPageLoader />
          <div className = 'products'>
          {
            pageProducts.map(({id, title, url}) => (
                <ProductsItem key={id} title={title} url={url} id={id} /> 
              ))
          }
          </div>
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
    products: selectproducts,      
    searchField: selectsearchField,     
    offset: selectoffset,
    perPage: selectperPage
  });

const mapDispatchToProps = dispatch => ({
    fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);