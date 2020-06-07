import ProductsActionTypes from './data.types';

const {
    FETCH_PRODUCTS_START,      
    FETCH_PRODUCTS_SUCCESS,             
    FETCH_PRODUCTS_FAILURE,     
    SET_SEARCH_FIELD,          
    UPDATE_OFFSET_AND_CURRENTPAGE
} = ProductsActionTypes;

const INITIAL_STATE = {
    products: [],
    offset: 0,
    perPage: 15,
    currentPage: 0,
    pageCount: 0,
    isFetching: false,
    errorMessage: undefined,
    searchField: ''
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload,
                pageCount: Math.ceil(action.payload.length/state.perPage)
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        case UPDATE_OFFSET_AND_CURRENTPAGE:
            return {
                ...state,
                offset: action.payload * state.perPage,
                currentPage: action.payload
            };
        default: 
            return state;
    
    }
}

export default productsReducer;