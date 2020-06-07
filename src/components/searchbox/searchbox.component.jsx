import React from 'react';
import {connect} from 'react-redux';
import {DebounceInput} from 'react-debounce-input';

import {handleSearchFieldChange} from './../../redux/data/data.actions';

import './searchbox.styles.css';

export const SearchBox = ({handleSearchFieldChange}) => (
  <div>
    <DebounceInput
      className='search'
      type='search'
      placeholder='Search a product'
      minLength={2}
      debounceTimeout={500}
      onChange={(e) => handleSearchFieldChange(e)} 
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSearchFieldChange: e => dispatch(handleSearchFieldChange(e))
});

export default connect(null, mapDispatchToProps)(SearchBox);