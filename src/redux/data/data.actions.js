import ProductsActionTypes from './data.types';

const {
    FETCH_PRODUCTS_START,      
    FETCH_PRODUCTS_SUCCESS,            
    FETCH_PRODUCTS_FAILURE,     
    SET_SEARCH_FIELD,          
    UPDATE_OFFSET_AND_CURRENTPAGE
} = ProductsActionTypes;

export const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = errorMessage => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: errorMessage
});

export const fetchProductsStartAsync = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(items => dispatch(fetchProductsSuccess(items)))
            .catch(error => dispatch(fetchProductsFailure(error.message)))
    }
}

export const handleSearchFieldChange = e => ({
    type: SET_SEARCH_FIELD,
    payload: e.target.value
  });

  export const handleOffsetAndCurrentPage = e => ({
    type: UPDATE_OFFSET_AND_CURRENTPAGE,
    payload: e.selected
  });











