import React from 'react';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import {createStructuredSelector} from 'reselect';

import Products from './../../components/products/products.components';
import {handleOffsetAndCurrentPage} from './../../redux/data/data.actions';
import {selectisFetching, selectpageCount} from '../../redux/data/data.selectors';

import './homepage.styles.scss';

const HomePage = ({isFetching, pageCount, handleOffsetAndCurrentPage}) => {
    return (
        <div>
            <Products />
            { isFetching ? null : (
                <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={e => handleOffsetAndCurrentPage(e)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
              )
            }
        </div>    
    );
};

const mapStateToProps = createStructuredSelector({
    pageCount: selectpageCount,
    isFetching: selectisFetching
  });

const mapDispatchToProps = dispatch => ({
    handleOffsetAndCurrentPage: (e) => dispatch(handleOffsetAndCurrentPage(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
