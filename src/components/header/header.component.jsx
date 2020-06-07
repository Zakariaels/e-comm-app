import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import SearchBox from '../searchbox/searchbox.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({hidden}) => (
    <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='search-box'>
                <SearchBox />
            </div>
            <div className='cart-icon-container'>
                <CartIcon className='cart-icon'/>
            </div>
          {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);