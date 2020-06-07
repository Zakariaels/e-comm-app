import React from 'react';
import loaderImg from "../../assets/loader.gif";
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectisFetching} from '../../redux/data/data.selectors';

import './full-page-loader.styles.scss';

const FullPageLoader = ({isFetching}) => {
    return isFetching ? (
        <div className='loader-container'>
            <div className='loader'>
                <img src={loaderImg} alt='loader' />
            </div>
        </div>
    ) : (null);
};

const mapStateToProps = createStructuredSelector({
    isFetching: selectisFetching
  });

export default connect(mapStateToProps)(FullPageLoader);